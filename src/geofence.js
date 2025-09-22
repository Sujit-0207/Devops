const booleanPointInPolygon = require("@turf/boolean-point-in-polygon").default || require("@turf/boolean-point-in-polygon");

// Example: Coimbatore city boundary simplified polygon (approximate). Replace with precise GeoJSON.
// Coordinates are [lng, lat]. This is a coarse bounding polygon for demo purposes.
const COIMBATORE_POLYGON = {
    type: "Feature",
    properties: { name: "Coimbatore" },
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
};

function isPointInsideGeofence(pointLngLat) {
    // pointLngLat: [lng, lat]
    return booleanPointInPolygon({ type: "Feature", geometry: { type: "Point", coordinates: pointLngLat } }, COIMBATORE_POLYGON);
}

function getGeofenceName() {
    return COIMBATORE_POLYGON.properties.name;
}

module.exports = { isPointInsideGeofence, getGeofenceName };
