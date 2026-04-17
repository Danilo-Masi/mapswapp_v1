import { useMemo, useState } from "react";
import { Drawer, DrawerContent } from "../ui/drawer";
import { Separator } from "../ui/separator";
import DataVisualization from "./DataVisualization";
import ToggleButtons from "./ToggleButtons";
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";
import { CountryName } from "react-countryname-flag";
import { useAppContext } from "@/context/AppContext";

interface AnalyticsDialogMobileProps {
  countriesState: { [key: string]: string };
}

const VALID_REGIONS = ["Europe", "Asia", "Africa", "Oceania", "Americas"];

// Mapping country --> continent
const countryToContinent = Object.fromEntries(
  countries.map(c => [c.cca2, c.region])
);

// Total countries per continent
const totalByContinent: Record<string, number> = {};
countries.forEach((c) => {
  if (!VALID_REGIONS.includes(c.region)) return;

  if (!totalByContinent[c.region]) {
    totalByContinent[c.region] = 0;
  }
  totalByContinent[c.region]++;
});

export default function AnalyticsDialogMobile({ countriesState }: AnalyticsDialogMobileProps) {
  const { isAnalyticsDialogOpen, setAnalyticsDialogOpen } = useAppContext();
  const [selectedType, setSelectedType] = useState<"visited" | "wishlist">("visited");

  // Grouped countries
  const grouped = useMemo(() => {
    const grouped: Record<string, string[]> = {};

    Object.entries(countriesState).forEach(([code, status]) => {
      if (status !== selectedType) return;

      const continent = countryToContinent[code];
      if (!continent || !VALID_REGIONS.includes(continent)) return;

      if (!grouped[continent]) grouped[continent] = [];
      grouped[continent].push(code);
    });

    // ordine stabile
    return Object.fromEntries(
      VALID_REGIONS
        .filter(region => grouped[region])
        .map(region => [region, grouped[region]])
    );

  }, [countriesState, selectedType]);

  // Visited country count
  const visitedCount = useMemo(
    () => Object.values(countriesState).filter(v => v === "visited").length,
    [countriesState]
  );

  // Percentage of world visited
  const percentage = Math.round((visitedCount / 195) * 100);

  // World regions visited
  const worldRegions = useMemo(
    () => Object.keys(grouped).length,
    [grouped]
  );

  // Visited by continent
  const visitedByContinent = useMemo(() => {
    const result: Record<string, number> = {};

    Object.entries(countriesState).forEach(([code, status]) => {
      if (status !== "visited") return;

      const continent = countryToContinent[code];
      if (!continent || !VALID_REGIONS.includes(continent)) return;

      if (!result[continent]) result[continent] = 0;
      result[continent]++;
    });

    return result;
  }, [countriesState]);

  return (
    <Drawer open={isAnalyticsDialogOpen} onOpenChange={setAnalyticsDialogOpen}>
      <DrawerContent className="p-4 pt-0 z-50 flex flex-col gap-8">

        {/* HEADER STATS */}
        <section className="flex justify-between items-center">
          <DataVisualization data={`${visitedCount}/195`} info="countries" />
          <Separator orientation="vertical" className="h-6" />
          <DataVisualization data={`${percentage}%`} info="of the world" />
          <Separator orientation="vertical" className="h-6" />
          <DataVisualization data={`${worldRegions}/5`} info="world regions" />
        </section>

        {/* TOGGLE */}
        <section className="flex justify-center">
          <ToggleButtons value={selectedType} onChange={setSelectedType} />
        </section>

        {/* LIST */}
        <section className="flex flex-col gap-5 max-h-[55svh] overflow-y-auto pr-1">

          {Object.keys(grouped).length === 0 && (
            <p className="text-center text-sm text-zinc-400 py-10">
              No countries yet
            </p>
          )}

          {Object.entries(grouped).map(([continent, codes]) => {
            const visited = visitedByContinent[continent] || 0;
            const total = totalByContinent[continent] || 0;
            const progress = total ? (visited / total) * 100 : 0;

            return (
              <div key={continent} className="flex flex-col gap-3">

                {/* HEADER CONTINENTE */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold text-zinc-800">
                      {continent}
                    </h2>
                    <span className="text-xs text-zinc-500">
                      {visited}/{total}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* COUNTRIES */}
                <div className="flex flex-wrap gap-2">
                  {codes.map((code) => (
                    <div
                      key={code}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-xs">
                      <ReactCountryFlag countryCode={code} />
                      <CountryName countryCode={code} />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </section>

      </DrawerContent>
    </Drawer>
  );
}