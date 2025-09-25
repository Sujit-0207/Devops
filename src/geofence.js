const booleanPointInPolygon = require("@turf/boolean-point-in-polygon").default || require("@turf/boolean-point-in-polygon");

// Major Indian cities with geofenced regions
// Coordinates are [lng, lat]
const REGIONS = [
    // Metro Cities - High offer availability
    {
        name: "Mumbai",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [72.7, 18.85],
                        [72.7, 19.35],
                        [73.2, 19.35],
                        [73.2, 18.85],
                        [72.7, 18.85],
                    ],
                ],
            },
        },
        center: { lat: 19.0760, lng: 72.8777 },
        tier: "metro",
    },
    {
        name: "Delhi",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [76.8, 28.35],
                        [76.8, 28.85],
                        [77.5, 28.85],
                        [77.5, 28.35],
                        [76.8, 28.35],
                    ],
                ],
            },
        },
        center: { lat: 28.6139, lng: 77.2090 },
        tier: "metro",
    },
    {
        name: "Bangalore",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.3, 12.7],
                        [77.3, 13.2],
                        [77.9, 13.2],
                        [77.9, 12.7],
                        [77.3, 12.7],
                    ],
                ],
            },
        },
        center: { lat: 12.9716, lng: 77.5946 },
        tier: "metro",
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
        tier: "metro",
    },
    {
        name: "Kolkata",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [88.2, 22.4],
                        [88.2, 22.8],
                        [88.6, 22.8],
                        [88.6, 22.4],
                        [88.2, 22.4],
                    ],
                ],
            },
        },
        center: { lat: 22.5726, lng: 88.3639 },
        tier: "metro",
    },
    {
        name: "Hyderabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [78.2, 17.2],
                        [78.2, 17.6],
                        [78.7, 17.6],
                        [78.7, 17.2],
                        [78.2, 17.2],
                    ],
                ],
            },
        },
        center: { lat: 17.3850, lng: 78.4867 },
        tier: "metro",
    },

    // Tier 1 Cities - Good offer availability
    {
        name: "Pune",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [73.6, 18.4],
                        [73.6, 18.8],
                        [74.0, 18.8],
                        [74.0, 18.4],
                        [73.6, 18.4],
                    ],
                ],
            },
        },
        center: { lat: 18.5204, lng: 73.8567 },
        tier: "tier1",
    },
    {
        name: "Ahmedabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [72.4, 22.9],
                        [72.4, 23.3],
                        [72.8, 23.3],
                        [72.8, 22.9],
                        [72.4, 22.9],
                    ],
                ],
            },
        },
        center: { lat: 23.0225, lng: 72.5714 },
        tier: "tier1",
    },
    {
        name: "Jaipur",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [75.6, 26.7],
                        [75.6, 27.1],
                        [76.0, 27.1],
                        [76.0, 26.7],
                        [75.6, 26.7],
                    ],
                ],
            },
        },
        center: { lat: 26.9124, lng: 75.7873 },
        tier: "tier1",
    },
    {
        name: "Surat",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [72.6, 21.0],
                        [72.6, 21.4],
                        [73.0, 21.4],
                        [73.0, 21.0],
                        [72.6, 21.0],
                    ],
                ],
            },
        },
        center: { lat: 21.1702, lng: 72.8311 },
        tier: "tier1",
    },
    {
        name: "Lucknow",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [80.7, 26.6],
                        [80.7, 27.0],
                        [81.1, 27.0],
                        [81.1, 26.6],
                        [80.7, 26.6],
                    ],
                ],
            },
        },
        center: { lat: 26.8467, lng: 80.9462 },
        tier: "tier1",
    },
    {
        name: "Kanpur",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [80.2, 26.3],
                        [80.2, 26.6],
                        [80.5, 26.6],
                        [80.5, 26.3],
                        [80.2, 26.3],
                    ],
                ],
            },
        },
        center: { lat: 26.4499, lng: 80.3319 },
        tier: "tier1",
    },
    {
        name: "Nagpur",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [78.9, 21.0],
                        [78.9, 21.3],
                        [79.2, 21.3],
                        [79.2, 21.0],
                        [78.9, 21.0],
                    ],
                ],
            },
        },
        center: { lat: 21.1458, lng: 79.0882 },
        tier: "tier1",
    },
    {
        name: "Indore",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [75.7, 22.6],
                        [75.7, 22.9],
                        [76.0, 22.9],
                        [76.0, 22.6],
                        [75.7, 22.6],
                    ],
                ],
            },
        },
        center: { lat: 22.7196, lng: 75.8577 },
        tier: "tier1",
    },
    {
        name: "Thane",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [72.9, 19.1],
                        [72.9, 19.3],
                        [73.1, 19.3],
                        [73.1, 19.1],
                        [72.9, 19.1],
                    ],
                ],
            },
        },
        center: { lat: 19.2183, lng: 72.9781 },
        tier: "tier1",
    },
    {
        name: "Bhopal",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.3, 23.1],
                        [77.3, 23.4],
                        [77.6, 23.4],
                        [77.6, 23.1],
                        [77.3, 23.1],
                    ],
                ],
            },
        },
        center: { lat: 23.2599, lng: 77.4126 },
        tier: "tier1",
    },
    {
        name: "Visakhapatnam",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [83.1, 17.6],
                        [83.1, 17.9],
                        [83.4, 17.9],
                        [83.4, 17.6],
                        [83.1, 17.6],
                    ],
                ],
            },
        },
        center: { lat: 17.6868, lng: 83.2185 },
        tier: "tier1",
    },

    // Tier 2 Cities - Moderate offer availability
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
        tier: "tier2",
    },
    {
        name: "Patna",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [85.0, 25.5],
                        [85.0, 25.8],
                        [85.3, 25.8],
                        [85.3, 25.5],
                        [85.0, 25.5],
                    ],
                ],
            },
        },
        center: { lat: 25.5941, lng: 85.1376 },
        tier: "tier2",
    },
    {
        name: "Vadodara",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [73.1, 22.2],
                        [73.1, 22.4],
                        [73.3, 22.4],
                        [73.3, 22.2],
                        [73.1, 22.2],
                    ],
                ],
            },
        },
        center: { lat: 22.3072, lng: 73.1812 },
        tier: "tier2",
    },
    {
        name: "Ghaziabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.3, 28.6],
                        [77.3, 28.8],
                        [77.5, 28.8],
                        [77.5, 28.6],
                        [77.3, 28.6],
                    ],
                ],
            },
        },
        center: { lat: 28.6692, lng: 77.4538 },
        tier: "tier2",
    },
    {
        name: "Ludhiana",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [75.8, 30.8],
                        [75.8, 31.0],
                        [76.0, 31.0],
                        [76.0, 30.8],
                        [75.8, 30.8],
                    ],
                ],
            },
        },
        center: { lat: 30.9010, lng: 75.8573 },
        tier: "tier2",
    },
    {
        name: "Agra",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.9, 27.1],
                        [77.9, 27.3],
                        [78.1, 27.3],
                        [78.1, 27.1],
                        [77.9, 27.1],
                    ],
                ],
            },
        },
        center: { lat: 27.1767, lng: 78.0081 },
        tier: "tier2",
    },
    {
        name: "Nashik",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [73.7, 19.9],
                        [73.7, 20.1],
                        [73.9, 20.1],
                        [73.9, 19.9],
                        [73.7, 19.9],
                    ],
                ],
            },
        },
        center: { lat: 19.9975, lng: 73.7898 },
        tier: "tier2",
    },
    {
        name: "Faridabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.2, 28.3],
                        [77.2, 28.5],
                        [77.4, 28.5],
                        [77.4, 28.3],
                        [77.2, 28.3],
                    ],
                ],
            },
        },
        center: { lat: 28.4089, lng: 77.3178 },
        tier: "tier2",
    },
    {
        name: "Meerut",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [77.6, 28.9],
                        [77.6, 29.1],
                        [77.8, 29.1],
                        [77.8, 28.9],
                        [77.6, 28.9],
                    ],
                ],
            },
        },
        center: { lat: 28.9845, lng: 77.7064 },
        tier: "tier2",
    },
    {
        name: "Rajkot",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [70.7, 22.2],
                        [70.7, 22.4],
                        [70.9, 22.4],
                        [70.9, 22.2],
                        [70.7, 22.2],
                    ],
                ],
            },
        },
        center: { lat: 22.3039, lng: 70.8022 },
        tier: "tier2",
    },

    // Tier 3 Cities - Limited offer availability
    {
        name: "Varanasi",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [82.9, 25.2],
                        [82.9, 25.4],
                        [83.1, 25.4],
                        [83.1, 25.2],
                        [82.9, 25.2],
                    ],
                ],
            },
        },
        center: { lat: 25.3176, lng: 82.9739 },
        tier: "tier3",
    },
    {
        name: "Srinagar",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [74.7, 34.0],
                        [74.7, 34.2],
                        [74.9, 34.2],
                        [74.9, 34.0],
                        [74.7, 34.0],
                    ],
                ],
            },
        },
        center: { lat: 34.0837, lng: 74.7973 },
        tier: "tier3",
    },
    {
        name: "Aurangabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [75.2, 19.8],
                        [75.2, 20.0],
                        [75.4, 20.0],
                        [75.4, 19.8],
                        [75.2, 19.8],
                    ],
                ],
            },
        },
        center: { lat: 19.8762, lng: 75.3433 },
        tier: "tier3",
    },
    {
        name: "Dhanbad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [86.4, 23.7],
                        [86.4, 23.9],
                        [86.6, 23.9],
                        [86.6, 23.7],
                        [86.4, 23.7],
                    ],
                ],
            },
        },
        center: { lat: 23.7957, lng: 86.4304 },
        tier: "tier3",
    },
    {
        name: "Amritsar",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [74.8, 31.5],
                        [74.8, 31.7],
                        [75.0, 31.7],
                        [75.0, 31.5],
                        [74.8, 31.5],
                    ],
                ],
            },
        },
        center: { lat: 31.6340, lng: 74.8723 },
        tier: "tier3",
    },
    {
        name: "Navi Mumbai",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [73.0, 19.0],
                        [73.0, 19.2],
                        [73.2, 19.2],
                        [73.2, 19.0],
                        [73.0, 19.0],
                    ],
                ],
            },
        },
        center: { lat: 19.0330, lng: 73.0297 },
        tier: "tier3",
    },
    {
        name: "Allahabad",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [81.8, 25.4],
                        [81.8, 25.6],
                        [82.0, 25.6],
                        [82.0, 25.4],
                        [81.8, 25.4],
                    ],
                ],
            },
        },
        center: { lat: 25.4358, lng: 81.8463 },
        tier: "tier3",
    },
    {
        name: "Howrah",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [88.2, 22.5],
                        [88.2, 22.7],
                        [88.4, 22.7],
                        [88.4, 22.5],
                        [88.2, 22.5],
                    ],
                ],
            },
        },
        center: { lat: 22.5958, lng: 88.2636 },
        tier: "tier3",
    },
    {
        name: "Ranchi",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [85.2, 23.3],
                        [85.2, 23.5],
                        [85.4, 23.5],
                        [85.4, 23.3],
                        [85.2, 23.3],
                    ],
                ],
            },
        },
        center: { lat: 23.3441, lng: 85.3096 },
        tier: "tier3",
    },
    {
        name: "Gwalior",
        polygon: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [78.1, 26.1],
                        [78.1, 26.3],
                        [78.3, 26.3],
                        [78.3, 26.1],
                        [78.1, 26.1],
                    ],
                ],
            },
        },
        center: { lat: 26.2183, lng: 78.1828 },
        tier: "tier3",
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
    return REGIONS.map((r) => ({ name: r.name, center: r.center, tier: r.tier }));
}

module.exports = { isPointInsideGeofence, getGeofenceName, detectRegion, getRegions };
