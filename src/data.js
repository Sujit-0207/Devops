// Comprehensive store dataset with realistic offer distribution across Indian cities

const stores = [
    {
        id: "s1",
        name: "Zara",
        imagePath: "/src/img/zara.png",
        categories: ["Men", "Women", "Kids"],
        rating: 4.4,
        priceRange: "₹₹₹",
        offersByRegion: {
            // Metro cities - Full offers
            Mumbai: { title: "Flat 30% Off", description: "On entire collection", terms: "Valid till month end" },
            Delhi: { title: "Buy 2 Get 1", description: "On selected items", terms: "Mix & match allowed" },
            Bangalore: { title: "Extra 25% Off", description: "On summer collection", terms: "In-store and online" },
            Chennai: { title: "Flat ₹1000 Off", description: "On purchases above ₹3999", terms: "Limited time offer" },
            Kolkata: { title: "Weekend Special", description: "40% off on kids wear", terms: "Sat-Sun only" },
            Hyderabad: { title: "Combo Deal", description: "Shirt + Trouser ₹2999", terms: "Select styles" },
            
            // Tier 1 cities - Good offers
            Pune: { title: "Flat 20% Off", description: "On new arrivals", terms: "Members exclusive" },
            Ahmedabad: { title: "Buy 1 Get 1", description: "On basics", terms: "Limited period" },
            Jaipur: { title: "Festival Offer", description: "25% off on ethnic wear", terms: "Valid for 7 days" },
            Surat: { title: "Flat ₹500 Off", description: "On orders above ₹2499", terms: "App exclusive" },
            Lucknow: { title: "15% Off", description: "On formal collection", terms: "Weekdays only" },
            
            // Tier 2 cities - Moderate offers
            Coimbatore: { title: "Flat 20% Off", description: "On summer collection", terms: "In-store and app" },
            Patna: { title: "10% Off", description: "On selected items", terms: "Min purchase ₹1999" },
            Vadodara: { title: "Flash Sale", description: "15% off for 3 days", terms: "While stocks last" },
            
            // Tier 3 cities - Limited offers (some cities have no offers)
            Varanasi: { title: "5% Off", description: "On formal wear", terms: "Min purchase ₹2999" },
        },
    },
    {
        id: "s2",
        name: "H&M",
        imagePath: "/src/img/handm.png",
        categories: ["Men", "Women"],
        rating: 4.2,
        priceRange: "₹₹",
        offersByRegion: {
            // Metro cities - Full offers
            Mumbai: { title: "Mega Sale", description: "Up to 50% off", terms: "Store wide offer" },
            Delhi: { title: "Student Discount", description: "20% off with student ID", terms: "Valid ID required" },
            Bangalore: { title: "Tech Week Special", description: "Buy 3 Get 1 Free", terms: "On casual wear" },
            Chennai: { title: "Flat ₹800 Off", description: "On purchases above ₹2999", terms: "Weekend only" },
            Kolkata: { title: "Cultural Special", description: "30% off on kurtas", terms: "Limited collection" },
            Hyderabad: { title: "IT Professional", description: "25% off on formals", terms: "Show employee ID" },
            
            // Tier 1 cities - Good offers
            Pune: { title: "Campus Special", description: "15% off for students", terms: "Valid college ID" },
            Ahmedabad: { title: "Business District", description: "20% off on shirts", terms: "Weekdays only" },
            Jaipur: { title: "Royal Discount", description: "₹600 off on ₹2499+", terms: "Heritage city special" },
            Indore: { title: "Central India", description: "18% off storewide", terms: "3-day offer" },
            
            // Tier 2 cities - Moderate offers
            Coimbatore: { title: "Extra 10%", description: "Members exclusive", terms: "On orders over ₹1999" },
            Ludhiana: { title: "Punjab Special", description: "12% off on winter wear", terms: "Season end sale" },
            Vadodara: { title: "Gujarat Offer", description: "₹300 off on ₹1999+", terms: "First time buyers" },
            
            // Tier 3 cities - Very limited offers
            Dhanbad: { title: "Coal City Special", description: "8% off", terms: "Min purchase ₹2499" },
        },
    },
    {
        id: "s3",
        name: "Nike",
        imagePath: "/src/img/nike.png",
        categories: ["Shoes", "Sportswear"],
        rating: 4.6,
        priceRange: "₹₹₹₹",
        offersByRegion: {
            // Metro cities - Premium offers
            Mumbai: { title: "Marathon Special", description: "30% off on running shoes", terms: "Sports enthusiasts" },
            Delhi: { title: "Capital Fitness", description: "Buy shoes get socks free", terms: "Premium range" },
            Bangalore: { title: "Tech Run", description: "25% off on tech wear", terms: "Innovation series" },
            Chennai: { title: "Monsoon Gear", description: "20% off on sports gear", terms: "Waterproof collection" },
            Hyderabad: { title: "Cyberabad Sports", description: "₹1500 off on ₹6999+", terms: "Elite collection" },
            
            // Tier 1 cities - Good offers
            Pune: { title: "University Sports", description: "Student discount 15%", terms: "Valid ID required" },
            Ahmedabad: { title: "Gujarat Games", description: "20% off on team jerseys", terms: "Bulk orders" },
            Jaipur: { title: "Rajputana Fitness", description: "18% off on training gear", terms: "Gym membership req" },
            Kanpur: { title: "UP Sports", description: "12% off on shoes", terms: "Select models" },
            
            // Tier 2 cities - Moderate offers (Nike has limited presence)
            Coimbatore: { title: "15% Off", description: "On running shoes", terms: "Select styles" },
            Patna: { title: "Bihar Fitness", description: "10% off on sportswear", terms: "Min purchase ₹3999" },
            
            // Tier 3 cities - Very limited (Nike not available in many tier 3 cities)
            Amritsar: { title: "Punjab Sports", description: "8% off", terms: "Min purchase ₹4999" },
        },
    },
    {
        id: "s4",
        name: "Levi's",
        imagePath: "/src/img/levis.png",
        categories: ["Denim", "Casual"],
        rating: 4.3,
        priceRange: "₹₹₹",
        offersByRegion: {
            // Metro cities - Strong denim market
            Mumbai: { title: "Denim Capital", description: "Buy 2 jeans get 1 free", terms: "Selected styles" },
            Delhi: { title: "Capital Style", description: "30% off on premium denim", terms: "Limited edition" },
            Bangalore: { title: "Tech Casual", description: "25% off on casual wear", terms: "Perfect for IT" },
            Chennai: { title: "South Style", description: "₹1000 off on ₹3999+", terms: "Combo offers" },
            Kolkata: { title: "Heritage Denim", description: "20% off on vintage collection", terms: "Classic fits" },
            Hyderabad: { title: "Nizami Style", description: "18% off on designer jeans", terms: "Premium range" },
            
            // Tier 1 cities - Good offers
            Pune: { title: "College Town", description: "Student discount 20%", terms: "Show valid ID" },
            Ahmedabad: { title: "Textile Hub", description: "22% off on denim", terms: "Local special" },
            Jaipur: { title: "Pink City Style", description: "₹800 off on ₹2999+", terms: "Royal collection" },
            Surat: { title: "Diamond City", description: "25% off storewide", terms: "Businessman special" },
            Lucknow: { title: "Nawabi Style", description: "15% off on formals", terms: "Ethnic fusion" },
            Indore: { title: "Central India", description: "18% off on casuals", terms: "Weekend offer" },
            
            // Tier 2 cities - Moderate offers
            Coimbatore: { title: "Combo Offer", description: "Jeans + Tee at ₹2999", terms: "Select items" },
            Vadodara: { title: "Chemical City", description: "12% off on work wear", terms: "Industrial area" },
            Agra: { title: "Taj City Special", description: "₹500 off on ₹2499+", terms: "Tourist special" },
            Ludhiana: { title: "Textile Town", description: "15% off on denim", terms: "Local industry" },
            
            // Tier 3 cities - Limited offers
            Varanasi: { title: "Heritage Offer", description: "8% off on casuals", terms: "Min purchase ₹2999" },
            Aurangabad: { title: "Marathwada Special", description: "10% off", terms: "Select items only" },
        },
    },
    {
        id: "s5",
        name: "Peter England",
        imagePath: "/src/img/peterengland.png",
        categories: ["Men", "Formal", "Casual"],
        rating: 4.1,
        priceRange: "₹₹",
        offersByRegion: {
            // Peter England - Strong presence across all tiers (Indian brand)
            // Metro cities
            Mumbai: { title: "Corporate Mumbai", description: "40% off on formal shirts", terms: "Office wear special" },
            Delhi: { title: "Government Special", description: "35% off + free alteration", terms: "Bulk orders welcome" },
            Bangalore: { title: "IT Professional", description: "Buy 3 shirts get 1 free", terms: "Perfect for techies" },
            Chennai: { title: "South Corporate", description: "30% off on office wear", terms: "Formal collection" },
            Kolkata: { title: "Babu Culture", description: "₹1200 off on ₹2999+", terms: "Government employees" },
            Hyderabad: { title: "Pharma City", description: "25% off on formals", terms: "Professional range" },
            
            // Tier 1 cities
            Pune: { title: "Education Hub", description: "Student discount 25%", terms: "College interviews" },
            Ahmedabad: { title: "Business Gujarat", description: "35% off on business formals", terms: "Entrepreneur special" },
            Jaipur: { title: "Government Seat", description: "30% off on formal wear", terms: "Officer collection" },
            Surat: { title: "Diamond Trade", description: "40% off for traders", terms: "Business community" },
            Lucknow: { title: "Capital Style", description: "25% off + free tie", terms: "Government workers" },
            Kanpur: { title: "Leather City", description: "20% off on leather accessories", terms: "Local industry" },
            Nagpur: { title: "Orange City", description: "28% off on summer formals", terms: "Government hub" },
            Indore: { title: "Commercial Capital", description: "22% off storewide", terms: "Business district" },
            Bhopal: { title: "State Capital", description: "30% off on formals", terms: "Government special" },
            
            // Tier 2 cities
            Coimbatore: { title: "Flat 30% Off", description: "On formal shirts", terms: "Min purchase ₹1999" },
            Patna: { title: "Bihar Government", description: "35% off for employees", terms: "Show employee ID" },
            Vadodara: { title: "Refinery City", description: "25% off on work formals", terms: "Industrial workers" },
            Ghaziabad: { title: "NCR Extension", description: "20% off + free alteration", terms: "Delhi vicinity" },
            Ludhiana: { title: "Punjab Hub", description: "28% off on party wear", terms: "Wedding season" },
            Agra: { title: "Heritage Style", description: "18% off on ethnic fusion", terms: "Tourist guide special" },
            Nashik: { title: "Wine City", description: "22% off on casuals", terms: "Hospitality workers" },
            Faridabad: { title: "Industrial Town", description: "25% off on work wear", terms: "Factory workers" },
            Meerut: { title: "Sports Goods", description: "20% off on sports formals", terms: "Industry special" },
            Rajkot: { title: "Saurashtra Style", description: "30% off on traditional formals", terms: "Local preference" },
            
            // Tier 3 cities - Good presence
            Varanasi: { title: "Holy City Special", description: "15% off on ethnic formals", terms: "Religious occasions" },
            Aurangabad: { title: "Marathwada Hub", description: "18% off on government formals", terms: "Administrative staff" },
            Dhanbad: { title: "Coal Belt", description: "20% off for miners", terms: "Show employment proof" },
            Amritsar: { title: "Golden Temple City", description: "25% off on wedding collection", terms: "Ceremonial wear" },
            Allahabad: { title: "Sangam City", description: "12% off on traditional formals", terms: "Religious workers" },
            Howrah: { title: "Industrial Hub", description: "15% off on work formals", terms: "Factory area" },
            Ranchi: { title: "Jharkhand Capital", description: "20% off for government", terms: "State employees" },
            Gwalior: { title: "Fort City", description: "18% off on royal collection", terms: "Heritage style" },
        },
    },
    {
        id: "s6",
        name: "Allen Solly",
        imagePath: "/src/img/allensolley.png",
        categories: ["Men", "Formal", "Premium"],
        rating: 4.2,
        priceRange: "₹₹₹",
        offersByRegion: {
            // Allen Solly - Premium brand with selective presence
            // Metro cities - Strong presence
            Mumbai: { title: "Friday Dressing", description: "30% off on smart casuals", terms: "Corporate Friday wear" },
            Delhi: { title: "Capital Premium", description: "Buy 2 Get 1 on premium shirts", terms: "Executive collection" },
            Bangalore: { title: "Smart Work", description: "25% off on tech-friendly formals", terms: "Silicon Valley style" },
            Chennai: { title: "Professional Edge", description: "₹1500 off on ₹4999+", terms: "Premium corporate" },
            Kolkata: { title: "Intelligent Formals", description: "20% off on smart wear", terms: "Professional class" },
            Hyderabad: { title: "IT Premium", description: "28% off on premium casuals", terms: "Tech professionals" },
            
            // Tier 1 cities - Good presence
            Pune: { title: "Smart Campus", description: "Student discount 20%", terms: "Premium student collection" },
            Ahmedabad: { title: "Business Premium", description: "25% off on business formals", terms: "Entrepreneur collection" },
            Jaipur: { title: "Royal Smart Wear", description: "22% off on premium formals", terms: "Heritage meets modern" },
            Surat: { title: "Diamond Class", description: "30% off for business class", terms: "Premium traders" },
            Lucknow: { title: "Smart Nawabi", description: "18% off on ethnic fusion", terms: "Modern traditional" },
            Indore: { title: "Smart Commerce", description: "20% off on business casuals", terms: "Commercial hub" },
            Nagpur: { title: "Central Premium", description: "15% off on premium range", terms: "Regional headquarters" },
            
            // Tier 2 cities - Limited presence
            Coimbatore: { title: "25% Off", description: "On formal collection", terms: "Premium brands included" },
            Vadodara: { title: "Refinery Premium", description: "18% off on executive wear", terms: "Senior professionals" },
            Patna: { title: "Smart Bihar", description: "12% off on premium formals", terms: "Government officers" },
            
            // Limited presence in Tier 3 cities
            Varanasi: { title: "Heritage Premium", description: "10% off", terms: "Min purchase ₹3999" },
        },
    },
    {
        id: "s7",
        name: "Raymonds",
        imagePath: "/src/img/raymonds.png",
        categories: ["Men", "Formal", "Luxury"],
        rating: 4.5,
        priceRange: "₹₹₹₹",
        offersByRegion: {
            // Raymonds - Premium luxury brand
            // Metro cities - Flagship presence
            Mumbai: { title: "Bespoke Mumbai", description: "Custom tailoring + 25% off", terms: "Premium suiting" },
            Delhi: { title: "Capital Luxury", description: "Free premium alteration", terms: "On suits above ₹15000" },
            Bangalore: { title: "Executive Suite", description: "30% off on business suits", terms: "CXO collection" },
            Chennai: { title: "South Premium", description: "₹5000 off on wedding suits", terms: "Ceremonial collection" },
            Kolkata: { title: "Heritage Luxury", description: "Classic suit + shirt + tie combo", terms: "Starting ₹18999" },
            Hyderabad: { title: "Royal Hyderabad", description: "Nizami collection 20% off", terms: "Royal heritage style" },
            
            // Tier 1 cities - Premium stores
            Pune: { title: "Corporate Luxury", description: "Executive discount 15%", terms: "For senior positions" },
            Ahmedabad: { title: "Business Mogul", description: "Premium suiting 20% off", terms: "Businessman special" },
            Jaipur: { title: "Maharaja Collection", description: "Royal suiting 25% off", terms: "Heritage luxury" },
            Surat: { title: "Diamond Merchant", description: "Luxury collection 18% off", terms: "Elite traders" },
            Lucknow: { title: "Nawabi Elegance", description: "Traditional luxury 20% off", terms: "Royal collection" },
            Indore: { title: "Central Luxury", description: "Premium suiting offer", terms: "15% off on luxury range" },
            
            // Tier 2 cities - Select presence
            Coimbatore: { title: "Tailoring Special", description: "Free alterations + 20% off", terms: "On suits & blazers" },
            Vadodara: { title: "Gujarat Premium", description: "Executive suiting 15% off", terms: "Senior professionals" },
            Patna: { title: "Bihar Luxury", description: "Premium collection 12% off", terms: "Government officials" },
            
            // Very limited presence in Tier 3 (only major ceremonial purchases)
            Varanasi: { title: "Ceremonial Special", description: "Wedding collection 10% off", terms: "Min purchase ₹25000" },
        },
    },
    // Additional Indian brands with wide reach
    {
        id: "s8",
        name: "Van Heusen",
        imagePath: "/src/img/vanheusen.png",
        categories: ["Men", "Formal", "Premium"],
        rating: 4.3,
        priceRange: "₹₹₹",
        offersByRegion: {
            // Strong presence across metros and tier 1 cities
            Mumbai: { title: "Corporate Mumbai", description: "40% off on formal shirts", terms: "Business collection" },
            Delhi: { title: "Executive Collection", description: "Buy 2 Get 1 on premium", terms: "Government quarter special" },
            Bangalore: { title: "Tech Professional", description: "30% off on smart casuals", terms: "IT professional range" },
            Chennai: { title: "South Executive", description: "25% off + free tie", terms: "Professional package" },
            Hyderabad: { title: "Pharma Professional", description: "28% off on executive wear", terms: "Industry special" },
            
            Pune: { title: "Education Corporate", description: "Student professional 20%", terms: "Campus interviews" },
            Ahmedabad: { title: "Business Gujarat", description: "30% off for entrepreneurs", terms: "Business community" },
            Jaipur: { title: "Government Special", description: "25% off for officers", terms: "Administrative staff" },
            Indore: { title: "Commercial Hub", description: "22% off on business formals", terms: "Trade center" },
            
            Coimbatore: { title: "Textile Professional", description: "20% off on work formals", terms: "Industry workers" },
            Patna: { title: "Government Bihar", description: "18% off for employees", terms: "State government" },
        },
    },
    {
        id: "s9",
        name: "Lifestyle",
        imagePath: "/src/img/lifestyle.jpg",
        categories: ["Men", "Women", "Kids", "Home"],
        rating: 4.0,
        priceRange: "₹₹",
        offersByRegion: {
            // Lifestyle - Good presence in metros and tier 1
            Mumbai: { title: "Mumbai Lifestyle", description: "Mega sale up to 60%", terms: "All categories" },
            Delhi: { title: "Capital Fashion", description: "Fashion week special 40%", terms: "Trendy collection" },
            Bangalore: { title: "Tech Life", description: "Smart living 30% off", terms: "Modern lifestyle" },
            Chennai: { title: "South Style", description: "Family pack offers", terms: "Buy for family save more" },
            
            Pune: { title: "Student Life", description: "Campus special 25%", terms: "Young lifestyle" },
            Ahmedabad: { title: "Family Lifestyle", description: "Home + fashion combo", terms: "Complete lifestyle" },
            Jaipur: { title: "Royal Lifestyle", description: "Heritage meets modern", terms: "Traditional + trendy" },
            
            Coimbatore: { title: "South Lifestyle", description: "Regional special 20%", terms: "Local preferences" },
        },
    },
    {
        id: "s10",
        name: "Pantaloons",
        imagePath: "/src/img/pantaloons.png",
        categories: ["Men", "Women", "Kids"],
        rating: 3.9,
        priceRange: "₹₹",
        offersByRegion: {
            // Pantaloons - Wide reach across all tiers
            Mumbai: { title: "Mumbai Fashion", description: "End of season sale 50%", terms: "All categories" },
            Delhi: { title: "Capital Fashion", description: "Fashion festival 40%", terms: "Store wide" },
            Bangalore: { title: "Tech Fashion", description: "Smart casual 30%", terms: "Young professionals" },
            Chennai: { title: "Family Fashion", description: "Buy 2 Get 1", terms: "Kids and adults" },
            Kolkata: { title: "Cultural Fashion", description: "Ethnic + western combo", terms: "Fusion collection" },
            
            Pune: { title: "College Fashion", description: "Student discount 25%", terms: "Trendy wear" },
            Ahmedabad: { title: "Gujarat Style", description: "Regional fashion 30%", terms: "Local taste" },
            Jaipur: { title: "Rajasthani Fashion", description: "Traditional meets trendy", terms: "Heritage collection" },
            
            Coimbatore: { title: "Tamil Fashion", description: "Regional styles 20%", terms: "South Indian preferences" },
            Patna: { title: "Bihar Fashion", description: "Affordable fashion 25%", terms: "Value for money" },
            Vadodara: { title: "Gujarat Trendy", description: "Modern fashion 18%", terms: "Contemporary styles" },
            
            // Good presence in tier 3 cities
            Varanasi: { title: "Heritage Fashion", description: "Traditional wear 15%", terms: "Cultural collection" },
            Amritsar: { title: "Punjab Fashion", description: "Colorful collection 20%", terms: "Vibrant styles" },
            Aurangabad: { title: "Marathwada Style", description: "Regional fashion 12%", terms: "Local preferences" },
        },
    },
];

module.exports = { stores };
