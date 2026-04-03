import { Separator } from "../ui/separator";
import { useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { CountryName } from "react-countryname-flag";
import countries from "world-countries";
import { Dialog, DialogContent } from "../ui/dialog";
import DataVisualization from "./DataVisualization";
import ToggleButtons from "./ToggleButtons";

interface AnalyticsDialogProps {
    isAnalyticsOpen: boolean;
    setAnalyticsOpen: (open: boolean) => void;
    countriesState: Record<string, string>;
}

const VALID_REGIONS = ["Europe", "Asia", "Africa", "Oceania", "Americas"];

// Mapping country --> continent
const countryToContinent = Object.fromEntries(
    countries.map((c) => [c.cca2, c.region])
);

// Total countries per continent
const totalByContinent: Record<string, number> = countries.reduce(
    (acc, c) => {
        if (!acc[c.region]) acc[c.region] = 0;
        acc[c.region]++;
        return acc;
    },
    {} as Record<string, number>
);

export default function AnalyticsDialog({ isAnalyticsOpen, setAnalyticsOpen, countriesState }: AnalyticsDialogProps) {
    const [selectedType, setSelectedType] = useState<"visited" | "wishlist">("visited");

    // Grouped countries
    const grouped = useMemo(() => {
        const result: Record<string, string[]> = {};

        Object.entries(countriesState).forEach(([code, status]) => {
            if (status !== selectedType) return;

            const continent = countryToContinent[code];
            if (!continent || !VALID_REGIONS.includes(continent)) return;

            if (!result[continent]) result[continent] = [];

            if (!result[continent].includes(code)) {
                result[continent].push(code);
            }
        });

        // ordine stabile
        return VALID_REGIONS.reduce((acc, region) => {
            if (result[region]) acc[region] = result[region];
            return acc;
        }, {} as Record<string, string[]>);
    }, [countriesState, selectedType]);

    // Visited country count
    const visitedCount = useMemo(
        () => Object.values(countriesState).filter((v) => v === "visited").length,
        [countriesState]
    );

    // Percentage of world visited
    const percentage = Math.round((visitedCount / 195) * 100);

    // World regions visited
    const worldRegionsVisited = Object.keys(grouped).length;

    // Visited by continent
    const visitedByContinent = useMemo(() => {
        const result: Record<string, number> = {};
        Object.entries(countriesState).forEach(([code, status]) => {
            if (status !== "visited") return;
            const continent = countryToContinent[code];
            if (!continent) return;
            result[continent] = (result[continent] || 0) + 1;
        });
        return result;
    }, [countriesState]);

    // Final data for continent progress bars
    const continentsData = VALID_REGIONS.map((continent) => ({
        continent,
        visited: visitedByContinent[continent] || 0,
        total: totalByContinent[continent] || 0,
    }));

    return (
        <Dialog open={isAnalyticsOpen} onOpenChange={setAnalyticsOpen}>
            <DialogContent className="z-50 max-w-md max-h-[90svh] overflow-y-scroll p-6 flex flex-col gap-10" showCloseButton={false}>

                {/* HEADER STATS */}
                <section className="w-full flex items-center justify-between">
                    <DataVisualization data={`${visitedCount}/195`} info="countries" />
                    <Separator orientation="vertical" className="h-10" />
                    <DataVisualization data={`${percentage}%`} info="of the world" />
                    <Separator orientation="vertical" className="h-10" />
                    <DataVisualization data={`${worldRegionsVisited}/5`} info="regions" />
                </section>

                {/* TOGGLE */}
                <ToggleButtons value={selectedType} onChange={setSelectedType} />

                {/* PROGRESS CONTINENTS */}
                <section className="flex flex-col gap-4">
                    {continentsData.map(({ continent, visited, total }) => (
                        <div key={continent} className="flex flex-col gap-1">

                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>{continent}</span>
                                <span>{visited}/{total}</span>
                            </div>

                            <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all ${selectedType === "visited"
                                        ? "bg-amber-400"
                                        : "bg-blue-400"
                                        }`}
                                    style={{
                                        width: `${total ? (visited / total) * 100 : 0}%`,
                                    }}
                                />
                            </div>

                        </div>
                    ))}
                </section>

                {/* LIST */}
                <section className="w-full h-[35svh] overflow-y-auto flex flex-col gap-4">

                    {Object.keys(grouped).length === 0 && (
                        <p className="text-sm text-zinc-400 text-center py-10">
                            No countries yet
                        </p>
                    )}

                    {Object.entries(grouped).map(([continent, codes]) => (
                        <div key={continent} className="flex flex-col gap-2">

                            <h2 className="text-sm font-semibold text-zinc-800">
                                {continent}
                            </h2>

                            <div className="flex flex-col gap-2">
                                {codes.map((code) => (
                                    <div
                                        key={code}
                                        className="px-3 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition flex items-center gap-2">
                                        <ReactCountryFlag countryCode={code} />
                                        <CountryName countryCode={code} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                </section>

            </DialogContent>
        </Dialog>
    );
}