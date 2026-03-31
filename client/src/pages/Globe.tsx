import GlobeMap from "@/components/globe/GlobeMap";
import { StatusDialog } from "@/components/globe/StatusDialog";
import StatusDialogMobile from "@/components/globe/StatusDialogMobile";
import { Globe2 } from "lucide-react";
import { useState } from "react";

export default function Globe() {
    const isMobile = window.innerWidth < 768;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<{
        name: string;
        code: string;
    }>({ name: "", code: "" });
    const [countriesState, setCountriesState] = useState<any>({});

    return (
        <div className="w-full h-svh relative">
            <GlobeMap
                setDialogOpen={setDialogOpen}
                setSelectedCountry={setSelectedCountry}
            />
            {!isMobile
                ? <StatusDialog
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                />
                : <StatusDialogMobile
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                />
            }

            <div className="p-3 rounded-full bg-blue-400 z-50 absolute bottom-5 right-5 shadow-lg flex items-center justify-center cursor-pointer">
                <Globe2 className="w-8 h-8" color="white" />
            </div>

        </div>
    )
}