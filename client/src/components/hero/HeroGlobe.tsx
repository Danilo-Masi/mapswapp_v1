import { Globe3D } from "@/components/ui/3d-globe";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import bg_image from "../../assets/bg_1.jpg";
import { sampleMarkers } from "@/data/markers";

export default function HeroGlobe() {
    const navigate = useNavigate();

    return (
        <section className="w-full h-auto flex flex-col items-center gap-y-10 pt-5 relative">

            {/* BACKGROUND */}
            <img src={bg_image} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
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
