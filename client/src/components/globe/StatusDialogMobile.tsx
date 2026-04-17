import { type Dispatch, type SetStateAction } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "../ui/button";
import { Compass, Heart, Flag } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useAppContext } from "@/context/AppContext";

interface StatusDialogProps {
    selectedCountry: { name: string; code: string };
    countriesState: { [key: string]: string };
    setCountriesState: Dispatch<SetStateAction<any>>;
}

export default function StatusDialogMobile({ selectedCountry, setCountriesState, countriesState }: StatusDialogProps) {
    const {isStateDialogOpen, setStateDialogOpen} = useAppContext();
    const isVisited = countriesState[selectedCountry.code] === "visited";
    const isWishlist = countriesState[selectedCountry.code] === "wishlist";

    function handleSetStatus(status: "visited" | "wishlist") {
        setCountriesState((prev: any) => {
            const currentStatus = prev?.[selectedCountry.code];
            return {
                ...prev,
                [selectedCountry.code]:
                    currentStatus === status ? null : status,
            };
        });
        setStateDialogOpen(false);
    }

    return (
        <Drawer open={isStateDialogOpen} onOpenChange={setStateDialogOpen}>
            <DrawerContent className="p-4 pt-0 z-50">

                {/* HEADER */}
                <DrawerHeader className="text-center">
                    <DrawerTitle className="text-2xl font-bold text-balance">
                        <ReactCountryFlag countryCode={selectedCountry.code} /> {selectedCountry.name}
                    </DrawerTitle>
                    <DrawerDescription>
                        Have you been here or planning to go?
                    </DrawerDescription>
                </DrawerHeader>

                {/* OPTIONS */}
                <div className="flex flex-col gap-4 mt-4">

                    {/* VISITED */}
                    <div
                        onClick={() => handleSetStatus("visited")}
                        className="w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 active:scale-[0.98] transition-all bg-linear-to-r from-amber-50 to-transparent">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full p-2 bg-amber-100">
                                <Flag className="text-amber-500 w-5 h-5" fill={isVisited ? "currentColor" : "none"} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg text-black font-semibold">Visited</h1>
                                <h3 className="text-sm text-zinc-500 font-light italic">I’ve already been here</h3>
                            </div>
                        </div>
                    </div>

                    {/* WISHLIST */}
                    <div
                        onClick={() => handleSetStatus("wishlist")}
                        className="w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 active:scale-[0.98] transition-all bg-linear-to-r from-blue-50 to-transparent">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full p-2 bg-blue-100">
                                <Heart className="text-blue-500 w-5 h-5" fill={isWishlist ? "currentColor" : "none"} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg text-black font-semibold">Want to go</h1>
                                <h3 className="text-sm text-zinc-500 font-light italic">Add to your wishlist</h3>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <Button className="w-full gap-2 py-8 mt-4 rounded-xl bg-zinc-900 text-white font-semibold transition-all">
                    <Compass className="w-5 h-5" />
                    Explore {selectedCountry.name} <ReactCountryFlag countryCode={selectedCountry.code} />
                </Button>

            </DrawerContent >
        </Drawer>
    )
}