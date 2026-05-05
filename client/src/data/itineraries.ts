import rome from "../assets/itineraries/rome_card.jpg";
import rome2 from "../assets/itineraries/rome_card_2.jpg";
import amsterdam from "../assets/itineraries/amsterdam_card.jpg";
import amsterdam2 from "../assets/itineraries/amsterdam_card_3.webp";
import budapest from "../assets/itineraries/budapest_card.jpg";
import budapest2 from "../assets/itineraries/budapest_card_2.jpg";
import london from "../assets/itineraries/london_card.jpg";
import london2 from "../assets/itineraries/london_card_2.jpg";
import paris from "../assets/itineraries/paris_card.jpg";
import paris2 from "../assets/itineraries/paris_card_2.jpg";
import lisbon from "../assets/itineraries/lisbon_card.jpg";
import lisbon2 from "../assets/itineraries/lisbon_card_2.jpg";
import newyork from "../assets/itineraries/newyork_card.jpg";
import newyork2 from "../assets/itineraries/newyork_card_2.jpg";

type ItineraryType = {
    id: string,
    title: string,
    description: string,
    city: string,
    country: string,
    continent: string,
    cover: string, // DA CAMBIARE
    cover2: string, // DA CAMBIARE
    images?: string[],
    price: number,
    duration: number,
    period: string,
    badge: string,
    spots: number,
    position: { lat: number, lng: number },
    previewSpots: { id: string, title: string, position: { lat: number, lng: number }, type: string, adress?: string }[],
}

export const itineraries: ItineraryType[] = [
    // PORTUGAL //
    {
        id: "lisbon-3-days",
        title: "Lisbon in 3 days — views & food",
        description: "Hills, trams and ocean vibes.",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: lisbon,
        cover2: lisbon2,
        price: 9.99,
        duration: 3,
        period: "summer",
        badge: "best_value",
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    // UNITED KINGDOM //
    {
        id: "london-4-days",
        title: "London in 4 days — iconic & local",
        description: "Landmarks + hidden areas.",
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
        cover: london,
        cover2: london2,
        price: 18.99,
        duration: 4,
        period: "autumn",
        badge: "trending",
        spots: 42,
        position: { lat: 51.5074, lng: -0.1278 },
        previewSpots: [
            { id: "1", title: "Westminster Abbey", position: { lat: 51.49936, lng: -0.12729 }, type: "activity", adress: "Dean's Yard, London SW1P 3PA, United Kingdom" },
            { id: "2", title: "Houses of Parliament & Big Ben", position: { lat: 51.50072, lng: -0.12462 }, type: "activity", adress: "Londra SW1A 0AA, United Kingdom" },
            { id: "3", title: "Southbank Walk", position: { lat: 51.5036, lng: -0.1173 }, type: "activity", adress: "Belvedere Rd, London SE1, United Kingdom" },
            { id: "4", title: "Borough Market", position: { lat: 51.50558, lng: -0.09048 }, type: "food", adress: "London SE1 9AH, United Kingdom" }
        ]
    },
    // FRANCE //
    {
        id: "paris-3-days",
        title: "Paris in 3 days — romance & food",
        description: "The perfect Paris experience.",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: paris,
        cover2: paris2,
        price: 18.99,
        duration: 3,
        period: "spring",
        badge: "trending",
        spots: 40,
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Cathédrale de Notre-Dame", position: { lat: 48.85296, lng: 2.3499 }, type: "activity", adress: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France" },
            { id: "2", title: "Île Saint-Louis", position: { lat: 48.85155, lng: 2.35742 }, type: "activity", adress: "Île Saint-Louis, 75004 Paris, France" },
            { id: "3", title: "Square René Viviani", position: { lat: 48.85217, lng: 2.34759 }, type: "activity", adress: "2 Rue du Fouarre, 75005 Paris, France" },
            { id: "4", title: "Café de Flore", position: { lat: 48.85415, lng: 2.3326 }, type: "food", adress: "172 Bd Saint-Germain, 75006 Paris, France" }
        ]
    },
    // ITALY //
    {
        id: "rome-3-days",
        title: "Rome in 3 days — history, food & hidden corners",
        description: "Walk through history, eat like a local and discover secret Rome.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: rome,
        cover2: rome2,
        price: 14.99,
        duration: 3,
        period: "spring",
        badge: "best_value",
        spots: 32,
        position: { lat: 41.9028, lng: 12.4964 },
        previewSpots: [
            { id: "1", title: "Colosseum", position: { lat: 41.8902, lng: 12.4922 }, type: "activity" },
            { id: "2", title: "Trevi Fountain", position: { lat: 41.9009, lng: 12.4833 }, type: "photo" },
            { id: "3", title: "Trastevere dinner", position: { lat: 41.8897, lng: 12.4708 }, type: "food" }
        ]
    },
    // NETHERLANDS //
    {
        id: "amsterdam-3-days",
        title: "Amsterdam in 3 days — canals & bikes",
        description: "Explore beyond clichés with cafés and hidden areas.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: amsterdam,
        cover2: amsterdam2,
        price: 9.99,
        duration: 3,
        period: "summer",
        badge: "trending",
        spots: 30,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Canals", position: { lat: 52.3731, lng: 4.8922 }, type: "activity" },
            { id: "2", title: "Jordaan", position: { lat: 52.3752, lng: 4.8830 }, type: "photo" },
            { id: "3", title: "Coffee shop", position: { lat: 52.3700, lng: 4.8900 }, type: "food" }
        ]
    },
    // HUNGARY //
    {
        id: "budapest-3-days",
        title: "Budapest in 3 days — spas & nightlife",
        description: "Relax, explore and party.",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: budapest,
        cover2: budapest2,
        price: 10.99,
        duration: 3,
        period: "spring",
        badge: "trending",
        spots: 30,
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Thermal baths", position: { lat: 47.5186, lng: 19.0810 }, type: "activity" },
            { id: "2", title: "Parliament", position: { lat: 47.5070, lng: 19.0450 }, type: "photo" },
            { id: "3", title: "Ruin bar", position: { lat: 47.4970, lng: 19.0630 }, type: "bar" }
        ]
    },
    // USA //
    {
        id: "newyork-7-days",
        title: "New York for the first time",
        description: "Manhattan, Brooklyn and local spots.",
        city: "New York",
        country: "USA",
        continent: "Americas",
        cover: newyork,
        cover2: newyork2,
        price: 25.99,
        duration: 5,
        period: "autumn",
        badge: "trending",
        spots: 59,
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: [
            { id: "1", title: "Metropolitan Museum of Art", position: { lat: 40.77943, lng: -73.96324 }, type: "activity" },
            { id: "2", title: "Central Park", position: { lat: 40.78255, lng: -73.96558 }, type: "activity" },
            { id: "3", title: "Bow Bridge", position: { lat: 40.77575, lng: -73.97177 }, type: "photo" }
        ]
    }
];