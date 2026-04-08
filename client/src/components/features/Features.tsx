import PhoneMockup from "./PhoneMockup";
// IMAGES
import newyork_card from "../../assets/newyork_card.jpg";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

function Header() {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <h1 className="text-4xl md:text-5xl max-w-md font-bold text-zinc-900">
                Plan less. Experience more.
            </h1>
            <p className="text-base md:text-lg max-w-md text-zinc-500 leading-relaxed">
                Real itineraries made by travelers. <br />
                Open them on Google Maps and just go.
            </p>
        </div>
    )
}

function Feature1() {
    return (
        <div className="w-full h-[60%] flex flex-col md:flex-row border border-zinc-300 rounded-xl bg-linear-to-l from-blue-500/10 via-blue-400/10 to-transparent">
            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 text-left p-5">

                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    Explore
                </span>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900">
                    Pick your next
                    <span className="text-blue-500"> adventure</span>
                </h1>

                <p className="text-base text-zinc-600 leading-relaxed max-w-md">
                    Discover ready-to-follow itineraries built by real travelers.
                    Hidden spots, local vibes, zero planning.
                </p>

                <p className="text-sm text-zinc-400">
                    Soon you’ll be able to sell your own itineraries too.
                </p>

            </div>

            {/* IMAGE */}
            <div className="w-1/2 h-full flex items-start justify-center">
                {/* CARD */}
                <div className="w-4/5 h-[90%] p-5 flex flex-col items-start justify-end rounded-b-2xl border border-t-0 border-zinc-200 relative shadow-2xl shadow-zinc-900">
                    <div className="w-full h-full absolute top-0 left-0 rounded-b-2xl bg-linear-to-t from-black/90 via-black/30 to-transparent z-10" />
                    <img src={newyork_card} className="w-full h-full object-cover absolute bottom-0 left-0 rounded-b-2xl z-0" />
                    <section className="flex flex-col w-full absolute rounded-b-2xl bottom-0 left-0 p-5 bg-linear-to-t from-black/90 via-black/60 to-transparent z-20">

                        <div className="flex items-center justify-between">
                            <h1 className="text-lg font-bold text-white">
                                New York Local Guide
                            </h1>
                            <p className="py-1 px-3 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white rounded-xl border border-white/20">
                                $19.95
                            </p>
                        </div>

                        <p className="text-white/70 text-xs mt-1 mb-2">
                            🇺🇸 USA • 14 days
                        </p>

                        <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-4">
                            Hidden cafés, real Bronx vibes, and spots you won’t find on Google
                        </p>

                        <Button className="w-full py-6 bg-blue-500 text-white font-semibold text-base rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
                            Open in Google Maps <ChevronRight />
                        </Button>

                    </section>
                </div>
            </div>
        </div>
    )
}

function Feature2() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-8 border border-zinc-200 rounded-2xl p-6 md:p-10 bg-linear-to-r from-blue-500/10 via-blue-400/10 to-transparent">

            {/* IMAGE / UI PREVIEW */}
            <div className="w-full md:w-1/2 flex items-center justify-center">

                <div className="w-full max-w-sm flex flex-col gap-3">

                    {/* DAY CARD */}
                    {["Day 1 – Arrival & City Walk", "Day 2 – Hidden Spots", "Day 3 – Food & Culture"].map((day, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-zinc-200 shadow-sm hover:scale-[1.02] transition">
                            <span className="text-sm font-medium text-zinc-800">
                                {day}
                            </span>

                            {/* toggle fake */}
                            <div className={`w-10 h-5 rounded-full ${i === 0 ? "bg-blue-500" : "bg-zinc-300"} relative`}>
                                <div className={`absolute top-0.5 ${i === 0 ? "right-0.5" : "left-0.5"} w-4 h-4 bg-white rounded-full transition`} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4 text-left">

                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    How it works
                </span>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900">
                    Plan nothing.
                    <span className="text-blue-500"> Follow everything.</span>
                </h1>

                <p className="text-base text-zinc-600 leading-relaxed max-w-md">
                    Your trip is already organized day by day.
                    Just open it, follow the route, and enjoy the experience.
                </p>

                <p className="text-sm text-zinc-400">
                    Turn days on or off anytime — adapt it to your trip.
                </p>

            </div>
        </div>
    )
}

function Feature3() {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center justify-between gap-6 overflow-hidden p-6 pb-0 border border-zinc-200 rounded-2xl bg-zinc-50">
            {/* TEXT */}
            <div className="w-full flex flex-col items-center text-center gap-4">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    Seamless experience
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900">
                    Open it.
                    <br />
                    <span className="text-blue-500">Follow it. Go.</span>
                </h1>
                <p className="text-base text-zinc-600 leading-relaxed max-w-xs">
                    Every stop and route is already inside Google Maps.
                    No new apps. No confusion.
                </p>
                <p className="text-sm text-zinc-400">
                    Just tap and start exploring.
                </p>
            </div>
            {/* IMAGE */}
            <PhoneMockup />
        </div>
    )
}

export default function Features() {
    return (
        <section className="w-[95%] md:w-5/6 flex flex-col items-center gap-12">
            <Header />
            <div className="w-full h-svh flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-2/3 h-full flex flex-col items-start justify-start gap-5">
                    <Feature1 />
                    <Feature2 />
                </div>
                <Feature3 />
            </div>
        </section>
    )
}