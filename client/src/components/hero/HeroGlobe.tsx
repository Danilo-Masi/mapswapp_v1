import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import sfondo from "../../assets/sfondo.webp";

const sampleMarkers: GlobeMarker[] = [
    // NORTH AMERICA
    {
        lat: 40.7128,
        lng: -74.006,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "New York",
    },
    {
        lat: 34.0522,
        lng: -118.2437,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Los Angeles",
    },
    {
        lat: 19.4326,
        lng: -99.1332,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Mexico City",
    },

    // SOUTH AMERICA
    {
        lat: -22.9068,
        lng: -43.1729,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Rio de Janeiro",
    },
    {
        lat: -34.6037,
        lng: -58.3816,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Buenos Aires",
    },
    {
        lat: -12.0464,
        lng: -77.0428,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Lima",
    },

    // EUROPE
    {
        lat: 48.8566,
        lng: 2.3522,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Paris",
    },
    {
        lat: 41.9028,
        lng: 12.4964,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Rome",
    },
    {
        lat: 52.52,
        lng: 13.405,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Berlin",
    },

    // AFRICA
    {
        lat: 30.0444,
        lng: 31.2357,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Cairo",
    },
    {
        lat: -1.2921,
        lng: 36.8219,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Nairobi",
    },
    {
        lat: -33.9249,
        lng: 18.4241,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Cape Town",
    },

    // MIDDLE EAST / CENTRAL ASIA
    {
        lat: 25.2048,
        lng: 55.2708,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Dubai",
    },
    {
        lat: 41.0082,
        lng: 28.9784,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Istanbul",
    },

    // SOUTH & EAST ASIA
    {
        lat: 28.6139,
        lng: 77.209,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "New Delhi",
    },
    {
        lat: 13.7563,
        lng: 100.5018,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Bangkok",
    },
    {
        lat: 1.3521,
        lng: 103.8198,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Singapore",
    },
    {
        lat: 35.6762,
        lng: 139.6503,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Tokyo",
    },
    {
        lat: 37.5665,
        lng: 126.978,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Seoul",
    },

    // OCEANIA
    {
        lat: -33.8688,
        lng: 151.2093,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Sydney",
    },
    {
        lat: -36.8485,
        lng: 174.7633,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Auckland",
    },

    // EXTRA (per riempire meglio il globo)
    {
        lat: 64.1466,
        lng: -21.9426,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Reykjavik",
    },
    {
        lat: 21.3069,
        lng: -157.8583,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "Honolulu",
    },
];

export default function HeroGlobe() {
    const navigate = useNavigate();

    return (
        <section className="w-full h-auto flex flex-col items-center gap-y-10 pt-5 relative">

            {/* BACKGROUND */}
            <img src={sfondo} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
            <div className="w-full h-[30svh] absolute bottom-0 left-0 bg-linear-to-t from-zinc-50 via-zinc-50/30 to-transparent z-20" />

            {/* NAVBAR */}
            <Navbar />

            <div className="w-full h-full min-h-[80svh] flex flex-col md:flex-row items-center">
                {/* TEXT */}
                <div className="w-[95%] md:w-1/2 h-auto min-h-[60svh] flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-30 gap-6 z-30">
                    <h1 className="text-6xl font-extrabold leading-none text-balance text-white">
                        Travel like a
                        <span className="text-blue-500"> local.</span>
                    </h1>
                    <p className="text-base md:text-lg text-zinc-200 leading-relaxed text-balance">
                        Get ready made itineraries from real travelers.
                        Hidden spots, real routes, zero guesswork,
                        just open it on <span className="italic font-semibold text-white">Google Maps </span> 📍 and go
                    </p>
                    <div className="flex flex-col md:flex-row gap-3">
                        <Button className="w-full md:w-auto px-6 py-7 text-base font-semibold rounded-xl bg-blue-500 text-white shadow-lg hover:scale-105 active:scale-95 transition">
                            🔍 Explore itineraries
                        </Button>
                        <Button
                            onClick={() => navigate("/globe", { replace: true })}
                            className="w-full md:w-auto px-6 py-7 text-base font-medium rounded-xl border border-zinc-300 hover:bg-zinc-900/80 transition">
                            🌍 Build your map
                        </Button>
                    </div>
                </div>
                {/* GLOBE */}
                <div className="w-full md:w-1/2 h-[50svh] md:h-[80svh] relative overflow-hidden">
                    <Globe3D
                        className="h-full w-full size-160 md:size-230 absolute -bottom-80 md:-bottom-96 left-1/2 md:left-32 -translate-x-1/2 md:translate-0"
                        markers={sampleMarkers}
                        config={{
                            bumpScale: 25,
                            autoRotateSpeed: 0.5,
                            ambientIntensity: 3,
                            pointLightIntensity: 5,
                        }}
                    />
                </div>
            </div>

        </section>
    );
}
