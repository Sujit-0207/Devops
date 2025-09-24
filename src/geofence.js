const booleanPointInPolygon = require("@turf/boolean-point-in-polygon").default || require("@turf/boolean-point-in-polygon");

// Demo regions with simple bounding polygons (replace with accurate city GeoJSON in production)
// Coordinates are [lng, lat]
const REGIONS = [
    {
        name: "Coimbatore",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [76.8, 10.75],
                        [76.8, 11.2],
                        [77.25, 11.2],
                        [77.25, 10.75],
                        [76.8, 10.75],
                    ],
                ],
            },
        },
        center: { lat: 11.0168, lng: 76.9558 },
    },
    {
        name: "Chennai",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [80.0, 12.8],
                        [80.0, 13.3],
                        [80.4, 13.3],
                        [80.4, 12.8],
                        [80.0, 12.8],
                    ],
                ],
            },
        },
        center: { lat: 13.0827, lng: 80.2707 },
    },
];

function detectRegion(pointLngLat) {
    for (const region of REGIONS) {
        const inside = booleanPointInPolygon({ type: "Feature", geometry: { type: "Point", coordinates: pointLngLat } }, region.polygon);
        if (inside) return region;
    }
    return null;
}

function isPointInsideGeofence(pointLngLat) {
    return detectRegion(pointLngLat) !== null;
}

function getGeofenceName(pointLngLat) {
    const r = detectRegion(pointLngLat);
    return r ? r.name : null;
}

function getRegions() {
    return REGIONS.map((r) => ({ name: r.name, center: r.center }));
}

module.exports = { isPointInsideGeofence, getGeofenceName, detectRegion, getRegions };
