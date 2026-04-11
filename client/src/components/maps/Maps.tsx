import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchBarMobile";
import ItineraryCard from "./ItineraryCard";
import { itineraries } from "../../data/itineraries";
import { useState } from "react";
import { SkeletonCard } from "./SkeletonCard";
import { EmptyResult } from "./EmptyResult";
import useIsMobile from "@/lib/screenWidth";

export default function Maps() {
    const isMobile = useIsMobile();

    // Search loading status
    const [isExploreLoading, setExploreLoading] = useState(false)
    // Filters status
    const [filters, setFilters] = useState({
        destination: "",
        duration: "",
        period: "",
        badge: "trending"
    });

    // Function to set itineraries by the filter
    const filteredItineraries = itineraries.filter((itinerary) => {
        const matchDestination =
            !filters.destination ||
            itinerary.country.toLowerCase().includes(filters.destination) ||
            itinerary.city.toLowerCase().includes(filters.destination);

        const matchDuration =
            !filters.duration ||
            itinerary.duration === Number(filters.duration);

        const matchPeriod =
            !filters.period ||
            filters.period === "all" ||
            itinerary.period.includes(filters.period as any);

        const matchBadge =
            !filters.badge ||
            itinerary.badges?.includes(filters.badge as any);

        return matchDestination && matchDuration && matchPeriod && matchBadge;
    });

    return (
        <section className="w-[95%] md:w-5/6 h-min flex flex-col items-center gap-10">
            {/* Search Bar */}
            {isMobile
                ? <SearchBarMobile
                    setFilters={setFilters}
                    isExploreLoading={isExploreLoading}
                    setExploreLoading={setExploreLoading} />
                : <SearchBar
                    setFilters={setFilters}
                    isExploreLoading={isExploreLoading}
                    setExploreLoading={setExploreLoading} />
            }
            {/* Skeleton or Card */}
            <div className="w-full h-min flex flex-wrap justify-start items-start gap-8">
                {isExploreLoading ? (
                    <>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </>
                ) : (
                    <>
                        {filteredItineraries.map((itinerary: any) => (
                            <ItineraryCard
                                key={itinerary.id}
                                image={itinerary.cover}
                                title={itinerary.title}
                                price={itinerary.price}
                                currency={itinerary.currency}
                                country={itinerary.country}
                                city={itinerary.city}
                                duration={itinerary.duration}
                                shortDescription={itinerary.description}
                                spots={itinerary.spots}
                                badges={itinerary.badges}
                                vibe={itinerary.vibe}
                            />
                        ))}
                    </>
                )}
            </div>
            {/* Empty status */}
            <div className="w-full h-[40svh] flex items-center justify-center">
                {filteredItineraries.length === 0 && (
                    <EmptyResult setFilters={setFilters} />
                )}
            </div>
        </section>
    )
}
