const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const promClient = require("prom-client");
const { isPointInsideGeofence, getGeofenceName, getRegions, detectRegion } = require("./geofence");
const { stores } = require("./data");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "..", "public")));
// Serve brand images from src/img directory
app.use("/src/img", express.static(path.join(__dirname, "img")));

// Prometheus metrics
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const requestCounter = new promClient.Counter({
    name: "geofence_requests_total",
    help: "Total number of geofence offer checks",
    labelNames: ["result"],
});
const requestDuration = new promClient.Histogram({
    name: "geofence_request_duration_seconds",
    help: "Duration of geofence checks in seconds",
    buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
});
const lastCheckGauge = new promClient.Gauge({
    name: "geofence_last_check_status",
    help: "1 if last check was inside, 0 otherwise",
});
register.registerMetric(requestCounter);
register.registerMetric(requestDuration);
register.registerMetric(lastCheckGauge);

app.get("/healthz", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/offer", (req, res) => {
    const endTimer = requestDuration.startTimer();
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
        requestCounter.inc({ result: "bad_request" });
        endTimer();
        return res.status(400).json({ error: "lat and lng query params are required as numbers" });
    }

    const region = detectRegion([lng, lat]);
    const inside = Boolean(region);
    lastCheckGauge.set(inside ? 1 : 0);
    requestCounter.inc({ result: inside ? "inside" : "outside" });
    endTimer();

    if (inside) {
        return res.json({
            inside: true,
            area: region.name,
            offer: {
                title: "Buy 1 Get 1 Free",
                description: "Exclusive offer available within the geofenced area.",
                terms: "Applicable on selected items. Limited time only.",
            },
        });
    }

    return res.json({ inside: false, area: null });
});

// Stores listing with region-based offers
app.get("/stores", (req, res) => {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);

    const region = !Number.isNaN(lat) && !Number.isNaN(lng) ? detectRegion([lng, lat]) : null;
    const inside = Boolean(region);

    const result = stores.map((s) => ({
        id: s.id,
        name: s.name,
        imagePath: s.imagePath,
        categories: s.categories,
        rating: s.rating,
        priceRange: s.priceRange,
        offer: inside && region && s.offersByRegion[region.name] ? s.offersByRegion[region.name] : null,
        eligible: inside && Boolean(region && s.offersByRegion[region.name]),
    }));

    res.json({ area: region ? region.name : null, inside, stores: result });
});

app.get("/stores/:id", (req, res) => {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const store = stores.find((s) => s.id === req.params.id);
    if (!store) return res.status(404).json({ error: "Store not found" });
    const region = !Number.isNaN(lat) && !Number.isNaN(lng) ? detectRegion([lng, lat]) : null;
    const inside = Boolean(region);
    res.json({
        id: store.id,
        name: store.name,
        imagePath: store.imagePath,
        categories: store.categories,
        rating: store.rating,
        priceRange: store.priceRange,
        offer: inside && region && store.offersByRegion[region.name] ? store.offersByRegion[region.name] : null,
        eligible: inside,
        area: region ? region.name : null,
        inside,
    });
});

// Regions endpoint for presets
app.get("/regions", (req, res) => {
    res.json({ regions: getRegions() });
});

app.get("/metrics", async (req, res) => {
    try {
        res.set("Content-Type", register.contentType);
        res.end(await register.metrics());
    } catch (err) {
        res.status(500).end(err.message);
    }
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://localhost:${port}`);
});
