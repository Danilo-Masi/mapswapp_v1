import { useEffect, useMemo, useRef } from "react";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Earth, Telescope } from "lucide-react";
// Globe
const Globe3D = lazy(() => import("@/components/ui/3d-globe"));
// Image
import bg_image from "../../assets/bg.webp";
// Data
import { itineraries } from "@/data/itineraries";
// Gsap
import gsap from "gsap";
import { scrollToElement } from "@/lib/gsap";

export default function HeroGlobe() {

    const navigate = useNavigate();
    const textRef = useRef(null);

    // Animate text on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, textRef);

        return () => ctx.revert();
    }, []);

    // Markers for the globe, memoized to avoid unnecessary recalculations
    const markers = useMemo(() => {
        return itineraries.map(({ position, city, cover }) => ({
            lat: position.lat,
            lng: position.lng,
            label: city,
            src: cover,
        }));
    }, []);

    // Globe config
    const globeConfig = useMemo(() => ({
        bumpScale: 25,
        initialRotation: { x: 0.41028, y: 0.158209 },
        autoRotateSpeed: 0.5,
        ambientIntensity: 3,
        pointLightIntensity: 5,
    }), []);

    return (
        <section className="w-full h-auto flex flex-col items-center gap-y-10 relative">

            {/* BACKGROUND */}
            <img
                src={bg_image}
                alt="Ready made travel itineraries on Google Maps with locations and routes"
                width={1920}
                height={1080}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="w-full h-[30svh] absolute bottom-0 left-0 bg-linear-to-t from-zinc-50 via-zinc-50/30 to-transparent z-20" />

            {/* NAVBAR */}
            <Navbar />

            {/* CONTENT */}
            <div className="w-full h-full min-h-[80svh] flex flex-col md:flex-row items-center">
                {/* Text */}
                <div
                    ref={textRef}
                    className="w-[95%] md:w-1/2 h-auto min-h-[60svh] flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-30 gap-6 z-30 md:mt-0 mt-10">
                    <h1 className="hero-text text-6xl font-extrabold leading-none text-balance text-zinc-900">
                        Travel like a
                        <span className="text-blue-500"> local.</span>
                    </h1>
                    <p className="hero-text text-base text-zinc-700 leading-relaxed text-balance">
                        Discover ready made travel itineraries created by real travelers.
                        Explore hidden spots, optimized routes, and local experiences, all directly on Google Maps.
                    </p>
                    {/* SEO */}
                    <h2 className="sr-only">
                        Discover ready made travel itineraries on Google Maps
                    </h2>
                    <div className="hero-text flex flex-col md:flex-row gap-3">
                        <Button
                            onClick={() => scrollToElement("maps")}
                            className="w-full md:w-auto p-6 text-base font-semibold rounded-xl bg-blue-500 text-white shadow-lg hover:scale-105 active:scale-95 transition">
                            <Telescope /> Explore itineraries
                        </Button>
                        <Button
                            onClick={() => navigate("/globe", { replace: true })}
                            className="w-full md:w-auto p-6 text-base font-medium rounded-xl hover:bg-zinc-800 transition">
                            <Earth /> Build your map
                        </Button>
                    </div>
                </div>
                {/* Globe */}
                <Suspense fallback={<Spinner />}>
                    <div className="w-full md:w-1/2 h-[50svh] md:h-[80svh] relative overflow-hidden">
                        <Globe3D
                            className="h-full w-full size-160 md:size-230 absolute -bottom-72 md:-bottom-96 left-1/2 md:left-32 -translate-x-1/2 md:translate-0"
                            markers={markers}
                            config={globeConfig}
                        />
                        {/* SEO */}
                        <h2 className="sr-only">
                            Explore travel itineraries around the world on an interactive map
                        </h2>
                    </div>
                </Suspense>
            </div>

        </section>
    );
}
