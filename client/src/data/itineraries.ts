import rome from "../assets/itineraries/rome_card.jpg";
import florence from "../assets/itineraries/florence_card.jpg";
import milan from "../assets/itineraries/milano_card.jpg";
import naples from "../assets/itineraries/naples_card.jpg";
import amsterdam from "../assets/itineraries/amsterdam_card.jpg";
import split from "../assets/itineraries/split_card.jpg";
import dubrovnik from "../assets/itineraries/dubrovnik_card.jpg";
import budapest from "../assets/itineraries/budapest_card.jpg";
import vienna from "../assets/itineraries/vienna_card.jpg";
import seville from "../assets/itineraries/siviglia_card.jpg";
import bilbao from "../assets/itineraries/bilbao_card.jpg";
import london from "../assets/itineraries/london_card.jpg";
import paris from "../assets/itineraries/paris_card.jpg";
import lisbon from "../assets/itineraries/lisbon_card.jpg";
import newyork from "../assets/itineraries/newyork_card.jpg";

type Itinerary = {
    id: string

    title: string
    city: string
    country: string
    continent: "Europe" | "Americas"

    cover: string
    price: number
    currency: "EUR" | "USD"

    duration: number
    period: ("spring" | "summer" | "autumn" | "winter")[]

    shortDescription: string
    description: string

    highlights: string[]
    includes: string[]

    tags: string[]

    badges?: ("trending" | "new" | "best_value" | "hidden_gems")[]
    spots: number
    level?: "easy" | "medium" | "intense"
    vibe?: ("food" | "nature" | "nightlife" | "culture" | "relax")[]
}

export const itineraries: Itinerary[] = [
    {
        id: "rome-3-days",
        title: "Rome in 3 days — history, food & hidden corners",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: rome,
        price: 14.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer", "autumn"],
        shortDescription: "The perfect mix of iconic Rome and local life.",
        description:
            "Walk through centuries of history without wasting hours planning. This itinerary takes you from the Colosseum to secret viewpoints, authentic trattorias, and hidden streets most tourists never see. Every stop is optimized so you enjoy Rome, not Google Maps.",
        highlights: [
            "Colosseum & Roman Forum optimized route",
            "Hidden Trastevere streets",
            "Authentic Roman food spots",
            "Secret sunset viewpoints"
        ],
        includes: [
            "Google Maps ready itinerary",
            "3-day optimized route",
            "Local food & coffee spots",
            "Time-saving plan"
        ],
        tags: ["rome", "italy", "3 days", "city", "food", "culture", "europe", "spring", "summer"],
        badges: ["best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "florence-2-days",
        title: "Florence in 2 days — art, views & Tuscan vibes",
        city: "Florence",
        country: "Italy",
        continent: "Europe",
        cover: florence,
        price: 12.99,
        currency: "EUR",
        duration: 2,
        period: ["spring", "summer", "autumn"],
        shortDescription: "A compact Florence experience done right.",
        description:
            "Discover Florence without feeling rushed. From Renaissance masterpieces to panoramic viewpoints and local trattorias, this itinerary helps you experience the city in the smartest way possible.",
        highlights: [
            "Duomo & historic center route",
            "Best sunset viewpoints",
            "Local trattorias",
            "Hidden artisan streets"
        ],
        includes: [
            "Google Maps route",
            "2-day plan",
            "Food & local tips"
        ],
        tags: ["florence", "italy", "2 days", "culture", "food", "europe"],
        badges: ["new"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "milan-2-days",
        title: "Milan in 2 days — design, food & city energy",
        city: "Milan",
        country: "Italy",
        continent: "Europe",
        cover: milan,
        price: 9.99,
        currency: "EUR",
        duration: 2,
        period: ["spring", "summer", "autumn", "winter"],
        shortDescription: "More than fashion: discover real Milan.",
        description:
            "From iconic landmarks to hidden neighborhoods, explore Milan like a local. This itinerary blends culture, modern vibes, and the best aperitivo spots.",
        highlights: [
            "Duomo & city center route",
            "Navigli canals",
            "Best aperitivo spots",
            "Hidden local areas"
        ],
        includes: [
            "Google Maps route",
            "2-day plan",
            "Food & nightlife tips"
        ],
        tags: ["milan", "italy", "2 days", "city", "food", "nightlife"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "naples-3-days",
        title: "Naples in 3 days — chaos, pizza & real Italy",
        city: "Naples",
        country: "Italy",
        continent: "Europe",
        cover: naples,
        price: 13.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer", "autumn"],
        shortDescription: "Authentic Italy at its rawest and best.",
        description:
            "Naples is chaotic, intense, and unforgettable. This itinerary guides you through the best of it — street food, historic sites, and breathtaking views — without getting lost in the chaos.",
        highlights: [
            "Historic center route",
            "Best pizza spots",
            "Seaside viewpoints",
            "Local street life"
        ],
        includes: [
            "Google Maps itinerary",
            "3-day plan",
            "Food & local tips"
        ],
        tags: ["naples", "italy", "3 days", "food", "culture"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },
    {
        id: "amsterdam-3-days",
        title: "Amsterdam in 3 days — canals, bikes & hidden gems",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: amsterdam,
        price: 9.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer"],
        shortDescription: "Explore Amsterdam beyond the clichés.",
        description:
            "Ride through canals, discover cozy cafés, and explore hidden neighborhoods. This itinerary is designed to show you the real Amsterdam, not just the tourist version.",
        highlights: [
            "Canal routes",
            "Local cafés",
            "Museum optimization",
            "Hidden areas"
        ],
        includes: [
            "Google Maps route",
            "3-day plan",
            "Local spots"
        ],
        tags: ["amsterdam", "netherlands", "3 days", "city", "europe"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },
    {
        id: "split-3-days",
        title: "Split in 3 days — sea, history & island vibes",
        city: "Split",
        country: "Croatia",
        continent: "Europe",
        cover: split,
        price: 11.99,
        currency: "EUR",
        duration: 3,
        period: ["summer"],
        shortDescription: "A perfect mix of beach and history.",
        description:
            "Explore ancient ruins, relax by the sea, and discover the best local spots. Split is the perfect summer destination — this plan helps you enjoy it fully.",
        highlights: [
            "Diocletian’s Palace route",
            "Beach spots",
            "Local bars",
            "Island vibes"
        ],
        includes: [
            "Google Maps itinerary",
            "3-day plan"
        ],
        tags: ["split", "croatia", "summer", "3 days"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "dubrovnik-2-days",
        title: "Dubrovnik in 2 days — walls, sea & sunsets",
        city: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        cover: dubrovnik,
        price: 10.99,
        currency: "EUR",
        duration: 2,
        period: ["summer"],
        shortDescription: "A cinematic city by the sea.",
        description:
            "Walk along ancient walls, swim in crystal-clear waters, and catch unforgettable sunsets. This itinerary helps you avoid crowds and enjoy the magic.",
        highlights: [
            "City walls route",
            "Best viewpoints",
            "Beach spots"
        ],
        includes: [
            "Google Maps route",
            "2-day plan"
        ],
        tags: ["dubrovnik", "croatia", "2 days", "summer"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "budapest-3-days",
        title: "Budapest in 3 days — spas, views & nightlife",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: budapest,
        price: 10.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer", "autumn"],
        shortDescription: "Relax, explore, and party in one trip.",
        description:
            "From thermal baths to ruin bars, Budapest is full of surprises. This itinerary blends relaxation, culture, and nightlife perfectly.",
        highlights: [
            "Thermal baths",
            "Danube viewpoints",
            "Ruin bars",
            "Historic sites"
        ],
        includes: [
            "Google Maps itinerary",
            "3-day plan"
        ],
        tags: ["budapest", "hungary", "3 days", "nightlife"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "vienna-2-days",
        title: "Vienna in 2 days — elegance, coffee & culture",
        city: "Vienna",
        country: "Austria",
        continent: "Europe",
        cover: vienna,
        price: 9.99,
        currency: "EUR",
        duration: 2,
        period: ["spring", "winter"],
        shortDescription: "A refined European escape.",
        description:
            "Discover imperial palaces, cozy cafés, and classical culture. Vienna is slow, elegant, and unforgettable.",
        highlights: [
            "Palaces route",
            "Coffee houses",
            "Historic center"
        ],
        includes: [
            "Google Maps route",
            "2-day plan"
        ],
        tags: ["vienna", "austria", "2 days", "culture"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "seville-3-days",
        title: "Seville in 3 days — sun, tapas & flamenco",
        city: "Seville",
        country: "Spain",
        continent: "Europe",
        cover: seville,
        price: 11.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "autumn"],
        shortDescription: "Feel the soul of southern Spain.",
        description:
            "Warm nights, tapas, and vibrant streets. This itinerary shows you the true energy of Seville.",
        highlights: ["Tapas spots", "Flamenco vibes", "Historic center"],
        includes: ["Google Maps route", "3-day plan"],
        tags: ["seville", "spain", "3 days", "food"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "bilbao-2-days",
        title: "Bilbao in 2 days — art, food & modern vibes",
        city: "Bilbao",
        country: "Spain",
        continent: "Europe",
        cover: bilbao,
        price: 9.99,
        currency: "EUR",
        duration: 2,
        period: ["spring", "summer"],
        shortDescription: "A modern city with deep culture.",
        description:
            "From the Guggenheim to local food spots, Bilbao mixes art and authenticity.",
        highlights: ["Guggenheim", "Food scene"],
        includes: ["Google Maps itinerary"],
        tags: ["bilbao", "spain", "2 days"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "london-4-days",
        title: "London in 4 days — iconic & local",
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
        cover: london,
        price: 15.99,
        currency: "EUR",
        duration: 4,
        period: ["spring", "summer", "autumn"],
        shortDescription: "The best of London without the chaos.",
        description:
            "See the iconic spots, but also discover local neighborhoods and hidden gems.",
        highlights: ["Landmarks", "Hidden areas"],
        includes: ["Google Maps plan"],
        tags: ["london", "uk", "4 days"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "paris-3-days",
        title: "Paris in 3 days — romance, food & views",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: paris,
        price: 14.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer", "autumn"],
        shortDescription: "The perfect Paris experience.",
        description:
            "From the Eiffel Tower to hidden cafés, experience Paris without stress.",
        highlights: ["Eiffel Tower", "Cafés", "Hidden streets"],
        includes: ["Google Maps route"],
        tags: ["paris", "france", "3 days"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "lisbon-3-days",
        title: "Lisbon in 3 days — views, food & ocean vibes",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: lisbon,
        price: 11.99,
        currency: "EUR",
        duration: 3,
        period: ["spring", "summer", "autumn"],
        shortDescription: "Colorful streets and ocean energy.",
        description:
            "Explore Lisbon’s hills, viewpoints, and food scene without wasting time planning.",
        highlights: ["Viewpoints", "Trams", "Food spots"],
        includes: ["Google Maps itinerary"],
        tags: ["lisbon", "portugal", "3 days"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    },

    {
        id: "newyork-5-days",
        title: "New York in 5 days — the real NYC experience",
        city: "New York",
        country: "USA",
        continent: "Americas",
        cover: newyork,
        price: 19.99,
        currency: "USD",
        duration: 5,
        period: ["spring", "summer", "autumn"],
        shortDescription: "Experience NYC beyond the tourist spots.",
        description:
            "From Manhattan to Brooklyn, discover the real New York with a perfectly optimized itinerary.",
        highlights: ["Skyline views", "Brooklyn", "Food spots"],
        includes: ["Google Maps plan"],
        tags: ["new york", "usa", "5 days", "city"],
        badges: ["trending", "best_value"],
        spots: 32,
        level: "medium",
        vibe: ["food", "culture"]
    }

];