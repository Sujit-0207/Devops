// Simple in-memory dataset for demo purposes

const stores = [
    {
        id: "s1",
        name: "Zara",
        categories: ["Men", "Women", "Kids"],
        rating: 4.4,
        priceRange: "₹₹₹",
        offersByRegion: {
            Coimbatore: { title: "Flat 20% Off", description: "On summer collection", terms: "In-store and app" },
            Chennai: { title: "Buy 2 Get 1", description: "On basics", terms: "Limited time" },
        },
    },
    {
        id: "s2",
        name: "H&M",
        categories: ["Men", "Women"],
        rating: 4.2,
        priceRange: "₹₹",
        offersByRegion: {
            Coimbatore: { title: "Extra 10%", description: "Members exclusive", terms: "On orders over ₹1999" },
            Chennai: { title: "Flat ₹500 Off", description: "On denim", terms: "Min spend ₹2499" },
        },
    },
    {
        id: "s3",
        name: "Nike",
        categories: ["Shoes", "Sportswear"],
        rating: 4.6,
        priceRange: "₹₹₹₹",
        offersByRegion: {
            Coimbatore: { title: "15% Off", description: "On running shoes", terms: "Select styles" },
            Chennai: { title: "Free Socks", description: "With footwear", terms: "While stocks last" },
        },
    },
    {
        id: "s4",
        name: "Levi's",
        categories: ["Denim", "Casual"],
        rating: 4.3,
        priceRange: "₹₹₹",
        offersByRegion: {
            Coimbatore: { title: "Combo Offer", description: "Jeans + Tee at ₹2999", terms: "Select items" },
            Chennai: { title: "20% Off", description: "On new arrivals", terms: "App only" },
        },
    },
];

module.exports = { stores };
