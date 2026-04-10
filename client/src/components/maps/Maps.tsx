import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchBarMobile";
import ItineraryCard from "./ItineraryCard";
import { itineraries } from "../../data/itineraries";

export default function Maps() {
    const isMobile = window.innerWidth < 728;
    return (
        <section className="w-[95%] md:w-5/6 flex flex-col items-center gap-10">
            {/* Search Bar */}
            {isMobile ? <SearchBarMobile /> : <SearchBar />}
            {/* Cards */}
            <div className="w-full flex flex-wrap justify-start items-start gap-8 md:gap-5 ">
                {itineraries.map((itinerary: any) => (
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
            </div>
        </section>
    )
}
