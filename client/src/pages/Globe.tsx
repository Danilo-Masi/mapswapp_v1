import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Earth } from "lucide-react";
import GlobeMap from "@/components/globe/GlobeMap";
import StatusDialog from "@/components/globe/StatusDialog";
import StatusDialogMobile from "@/components/globe/StatusDialogMobile";
import AnalyticsDialog from "@/components/globe/AnalyticsDialog";
import AnalyticsDialogMobile from "@/components/globe/AnalyticsDialogMobile";

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);
    return isMobile;
}

export default function Globe() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    // State for selected country in the dialog
    const [selectedCountry, setSelectedCountry] = useState<{ name: string; code: string }>({ name: "", code: "" });
    // Save countries state in localStorage to persist it across page reloads
    const [countriesState, setCountriesState] = useState<{ [key: string]: string }>(() => {
        const saved = localStorage.getItem("countriesState");
        return saved ? JSON.parse(saved) : {};
    });
    // State for country status dialog
    const [dialogOpen, setDialogOpen] = useState(false);
    // Analytics dialog state
    const [isAnalyticsOpen, setAnalyticsOpen] = useState(false);

    // Update localStorage whenever countriesState changes
    useEffect(() => {
        localStorage.setItem("countriesState", JSON.stringify(countriesState));
    }, [countriesState]);

    const visitedCount = useMemo(
        () => Object.values(countriesState).filter(v => v === "visited").length,
        [countriesState]
    );

    return (
        <div className="w-full h-svh relative ovefloww-hidden">

            {/* FLOATING BACK BUTTON */}
            <Button
                onClick={() => navigate("/", { replace: true })}
                className="absolute top-5 left-5 z-50 py-5">
                <ChevronLeft className="w-5 h-5" />Go Back
            </Button>

            {/* MAP */}
            <GlobeMap
                countriesState={countriesState}
                setDialogOpen={setDialogOpen}
                setSelectedCountry={setSelectedCountry} />

            {/* FLOATING ANALYTICS BUTTON */}
            <div className="absolute bottom-5 right-5 flex flex-col gap-3 items-center">
                <button
                    onClick={() => setAnalyticsOpen(true)}
                    className="p-3 rounded-full bg-blue-500 shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer">
                    <Earth className="w-8 md:w-6 h-8 md:h-6 text-white" />
                </button>
                <div className="px-3 py-1 rounded-full bg-white shadow text-xs text-zinc-600">
                    🌍 {visitedCount} visited
                </div>
            </div>

            {/* COUNTRY STATUS DIALOG */}
            {!isMobile
                ? <StatusDialog
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState} />
                : <StatusDialogMobile
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState} />
            }

            {/* ANALTYCS DIALOG */}
            {!isMobile
                ? <AnalyticsDialog
                    isAnalyticsOpen={isAnalyticsOpen}
                    setAnalyticsOpen={setAnalyticsOpen}
                    countriesState={countriesState} />
                : <AnalyticsDialogMobile
                    isAnalyticsOpen={isAnalyticsOpen}
                    setAnalyticsOpen={setAnalyticsOpen}
                    countriesState={countriesState} />
            }

        </div>
    )
}