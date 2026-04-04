import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { Button } from "../ui/button";

const sampleMarkers: GlobeMarker[] = [
    {
        lat: 40.7128,
        lng: -74.006,
        src: "https://assets.aceternity.com/avatars/1.webp",
        label: "New York",
    },
    {
        lat: 51.5074,
        lng: -0.1278,
        src: "https://assets.aceternity.com/avatars/2.webp",
        label: "London",
    },
    {
        lat: 35.6762,
        lng: 139.6503,
        src: "https://assets.aceternity.com/avatars/3.webp",
        label: "Tokyo",
    },
    {
        lat: -33.8688,
        lng: 151.2093,
        src: "https://assets.aceternity.com/avatars/4.webp",
        label: "Sydney",
    },
    {
        lat: 48.8566,
        lng: 2.3522,
        src: "https://assets.aceternity.com/avatars/5.webp",
        label: "Paris",
    },
    {
        lat: 28.6139,
        lng: 77.209,
        src: "https://assets.aceternity.com/avatars/6.webp",
        label: "New Delhi",
    },
    {
        lat: 55.7558,
        lng: 37.6173,
        src: "https://assets.aceternity.com/avatars/7.webp",
        label: "Moscow",
    },
    {
        lat: -22.9068,
        lng: -43.1729,
        src: "https://assets.aceternity.com/avatars/8.webp",
        label: "Rio de Janeiro",
    },
    {
        lat: 31.2304,
        lng: 121.4737,
        src: "https://assets.aceternity.com/avatars/9.webp",
        label: "Shanghai",
    },
    {
        lat: 25.2048,
        lng: 55.2708,
        src: "https://assets.aceternity.com/avatars/10.webp",
        label: "Dubai",
    },
    {
        lat: -34.6037,
        lng: -58.3816,
        src: "https://assets.aceternity.com/avatars/11.webp",
        label: "Buenos Aires",
    },
    {
        lat: 1.3521,
        lng: 103.8198,
        src: "https://assets.aceternity.com/avatars/12.webp",
        label: "Singapore",
    },
    {
        lat: 37.5665,
        lng: 126.978,
        src: "https://assets.aceternity.com/avatars/13.webp",
        label: "Seoul",
    },
];

export default function HeroGlobe() {
    return (
        <section className="w-full md:w-5/6 min-h-[85svh] flex flex-col items-center justify-center relative overflow-hidden px-4">

            {/* TEXT */}
            <div className="z-20 flex flex-col items-center text-center gap-5 max-w-2xl">

                {/* Eyebrow */}
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium">
                    🔥 Stop planning. Start exploring.
                </span>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-balance">
                    Travel like a
                    <span className="text-blue-500"> local</span>
                </h1>

                {/* Subtext */}
                <p className="text-base md:text-lg text-zinc-300 max-w-md leading-relaxed text-balance">
                    Buy ready-made itineraries from real travelers.
                    Hidden spots, real routes, zero guesswork,
                    just open it on Google Maps and go.
                </p>

                {/* CTA */}
                <div className="flex flex-col md:flex-row gap-3">
                    <Button className="w-full md:w-auto px-6 py-7 text-base font-semibold rounded-xl bg-blue-500 text-white shadow-lg hover:scale-105 active:scale-95 transition">
                        🔍 Explore itineraries
                    </Button>
                    <Button className="w-full md:w-auto px-6 py-7 text-base font-medium rounded-xl border border-zinc-300 hover:bg-zinc-100 transition">
                        🌍 Build your map
                    </Button>
                </div>

                {/* Social proof */}
                <p className="text-xs text-zinc-400">
                    Created by travelers • Real places only • No tourist traps
                </p>
            </div>

            {/* GLOBE */}
            <div className="absolute -bottom-80 md:-bottom-96 left-1/2 -translate-x-1/2 size-160 md:size-200 z-0 opacity-90">
                <Globe3D
                    className="h-full w-full"
                    markers={sampleMarkers}
                    config={{
                        atmosphereColor: "#4da6ff",
                        atmosphereIntensity: 20,
                        bumpScale: 5,
                        autoRotateSpeed: 0.5,
                    }}
                />
            </div>

        </section>
    );
}
