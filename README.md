# Geofencing-Based Promotional System (Demo)

This project demonstrates a geofencing-based offer system that displays a promotion only when a user is physically inside a defined geographic area. It includes:

-   Express API with geofence evaluation
-   Browser frontend that requests geolocation and shows/hides offer
-   Prometheus metrics endpoint and Grafana dashboard
-   Docker and docker-compose for local demo
-   GitHub Actions CI for dependency install and Docker build

## Architecture

-   Backend (`/src`):
    -   `GET /offer?lat=..&lng=..` evaluates if a point is inside the geofence.
    -   `GET /restaurants?lat=..&lng=..` lists restaurants and marks offers eligible if inside area.
    -   `GET /restaurants/:id?lat=..&lng=..` returns a single restaurant with location-based offer eligibility.
    -   `GET /metrics` exposes Prometheus metrics.
    -   `GET /healthz` for health checks.
-   Frontend (`/public`): static page that asks for browser geolocation and calls `/offer` to show/hide the offer.
    -   Lists restaurants and highlights applicable offers when inside the geofence.
-   Geofence: a polygon (approximate Coimbatore boundary for demo) in `src/geofence.js`. Replace with accurate GeoJSON for production.
-   Monitoring: Prometheus scrapes the app; Grafana has a basic dashboard.

## Geofencing Implementation

-   Uses `@turf/boolean-point-in-polygon` for robust point-in-polygon checks on GeoJSON polygons.
-   Input to `/offer` is provided by the client using browser geolocation (or your mobile app SDK).
-   The API returns `{inside: boolean, area: string, offer?: {...}}` so clients can toggle UI easily.

## Metrics

-   `geofence_requests_total{result=inside|outside|bad_request}`
-   `geofence_request_duration_seconds` (histogram)
-   `geofence_last_check_status` (gauge 1/0)

## Local Demo with Docker

Prereqs: Docker Desktop.

```bash
# From repo root
docker compose up --build
# App:      http://localhost:3000
# Prom:     http://localhost:9090
# Grafana:  http://localhost:3001 (anonymous enabled)
```

In the browser at `http://localhost:3000`:

-   Click "Check My Location". If you are in or around Coimbatore, offer appears. Else it hides.
-   To simulate, you can directly query: `http://localhost:3000/offer?lat=11.0168&lng=76.9558` (Coimbatore approx → inside) and `http://localhost:3000/offer?lat=13.0827&lng=80.2707` (Chennai → outside).

## Running locally without Docker

```bash
npm ci
npm run start
# open http://localhost:3000
```

## CI/CD

-   GitHub Actions workflow (`.github/workflows/ci.yml`) runs on pushes/PRs to main:
    -   Checks out code, installs dependencies with `npm ci`, builds Docker image.
-   Extend to push to a registry and deploy (e.g., to Kubernetes) by adding credentials and a `deploy` job.

## Production Considerations

-   Replace demo polygon with authoritative city boundary GeoJSON.
-   On-device geolocation: use high-accuracy mode, handle permissions, and consider spoofing detection.
-   Server-side validation: optionally corroborate with IP-based geo or device attestation.
-   Privacy: collect minimal location data, adhere to consent and retention policies.
-   Security: rate-limit `/offer`, add auth if needed.
-   Scalability: run behind a load balancer; app is stateless. Export metrics per instance.

## Alerting (example, to be wired in Prometheus rules)

-   High rate of `bad_request`.
-   Sudden drop to zero in `geofence_requests_total`.
-   Spike in p95 `geofence_request_duration_seconds`.

## Demo Script

1. Start stack: `docker compose up --build`.
2. Open app in two scenarios:
    - Inside area (use Coimbatore coords): `http://localhost:3000/offer?lat=11.0168&lng=76.9558` → shows offer.
    - Outside area (e.g., Chennai): `http://localhost:3000/offer?lat=13.0827&lng=80.2707` → hides offer.
3. In Grafana, view "Geofence Offer Monitoring" dashboard for live metrics.
4. Restaurants API examples:
    - List: `http://localhost:3000/restaurants?lat=11.0168&lng=76.9558`
    - Single: `http://localhost:3000/restaurants/r1?lat=11.0168&lng=76.9558`

## Replace Geofence

Edit `src/geofence.js` and set your GeoJSON polygon:

```js
const MY_POLYGON = {
    type: "Feature",
    properties: { name: "MyArea" },
    geometry: {
        type: "Polygon",
        coordinates: [
            /* ... */
        ],
    },
};
```

Then restart the app.

## License

MIT
