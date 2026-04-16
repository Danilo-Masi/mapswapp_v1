import PhoneMockup from "./PhoneMockup";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Switch } from "../ui/switch";
// Data
import { days } from "@/data/mapData";
// Images
import newyork_card from "../../assets/itineraries/newyork_card.jpg";
import lisbon_card from "../../assets/itineraries/lisbon_card.jpg";
import london_card from "../../assets/itineraries/london_card.jpg";

interface TextSectionProps {
    span: string;
    title: string;
    titleHighlights: string;
    description: string;
    info: string;
}

function TextSection({ span, title, titleHighlights, description, info }: TextSectionProps) {
    return (
        <>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-3">
                {span}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900 text-balance mb-3">
                {title}
                <span className="text-blue-500"> {titleHighlights}</span>
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed text-balance mb-1">
                {description}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed text-balance">
                {info}
            </p>
        </>
    )
}

function Feature1() {
    return (
        <div className="w-full h-auto md:h-1/2 flex flex-col md:flex-row border border-zinc-300 rounded-xl bg-linear-to-t md:bg-linear-to-l from-blue-500/10 via-blue-200/10 to-transparent">

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-5 order-1 md:order-2">
                <TextSection
                    span="Explore"
                    title="Pick your next"
                    titleHighlights="adventure"
                    description="Discover ready to follow itineraries built by real travelers. Hidden spots, local vibes, zero planning."
                    info="Soon you’ll be able to sell your own itineraries too"
                />
            </div>

            {/* CARD STACK */}
            <div className="w-full md:w-1/2 h-[50svh] md:h-full relative flex items-center justify-center overflow-hidden group order-2 md:order-1">

                {/* BACK */}
                <div className="absolute w-[70%] md:w-4/5 h-[85%] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl 
                    top-10 right-16 md:right-20 
                    rotate-[-8deg] scale-95 opacity-50 blur-[2px]
                    group-hover:translate-x-2 group-hover:-translate-y-2 transition duration-500">

                    <img src={lisbon_card} className="w-full h-full object-cover" />
                </div>

                {/* MIDDLE */}
                <div className="absolute w-[70%] md:w-4/5 h-[85%] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl 
                    top-5 right-10 md:right-12 
                    rotate-[-4deg] scale-100 opacity-80
                    group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-500">

                    <img src={london_card} className="w-full h-full object-cover" />
                </div>

                {/* FRONT (MAIN CARD) */}
                <div className="relative w-[75%] md:w-[85%] h-[90%] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl group-hover:scale-[1.03] transition duration-300">

                    <img src={newyork_card} className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 p-4 text-white flex flex-col gap-1">
                        <span className="text-xs text-white/70">New York</span>
                        <h3 className="text-lg font-semibold leading-tight text-balance">
                            5 days in NYC — Real local experience
                        </h3>
                        <span className="text-sm font-medium text-blue-300">
                            €19.99
                        </span>
                    </div>
                </div>

                {/* FLOATING COUNTER */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-800 shadow-md">
                    +20 itineraries
                </div>

            </div>
        </div>
    )
}

function Feature2({ daySelected, setDaySelected }: { daySelected: number; setDaySelected: Dispatch<SetStateAction<number>> }) {
    return (
        <div className="w-full h-auto md:h-1/2 flex flex-col md:flex-row items-center gap-8 border border-zinc-200 rounded-2xl p-6 md:p-10 bg-linear-to-b md:bg-linear-to-r from-blue-500/10 via-blue-200/10 to-transparent">

            {/* TEXT */}
            <div className="w-full md:w-1/2 h-min md:h-full flex flex-col items-start justify-center text-left">
                <TextSection
                    span="How it works"
                    title="Plan nothing."
                    titleHighlights="Follow everyhing."
                    description="Your trip is already organized day by day. Just open it, follow the route, and enjoy the experience."
                    info="Turn days on or off anytime, adapt it to your trip"
                />
            </div>

            {/* SWITCH */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-sm flex flex-col gap-3">
                    {days.map((day) => {
                        const isActive = daySelected === day.id
                        return (
                            <div
                                key={day.id}
                                className={`flex flex-col gap-2 px-4 py-3 rounded-xl border shadow-sm transition cursor-pointer ${isActive ? "bg-blue-50 border-blue-300 scale-[1.02]" : "bg-white border-zinc-200 hover:scale-[1.02]"}`}
                                onClick={() => setDaySelected(day.id)}>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-zinc-800">
                                        {day.title}
                                    </span>
                                    <Switch
                                        checked={isActive}
                                        onCheckedChange={() => setDaySelected(day.id)}
                                        className="data-[state=checked]:bg-blue-500 cursor-pointer" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

function Feature3({ daySelected }: { daySelected: number }) {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center justify-between gap-6 overflow-hidden p-6 pb-0 border border-zinc-200 rounded-2xl bg-zinc-50">
            {/* TEXT */}
            <div className="w-full h-min flex flex-col items-center text-center">
                <TextSection
                    span="Seamless experience"
                    title="Open it. Follow it."
                    titleHighlights="Go."
                    description="Every stop and route is already inside Google Maps. No new apps. No confusion."
                    info="Just tap and start exploring"
                />
            </div>
            {/* IMAGE */}
            <PhoneMockup
                daySelected={daySelected} />
        </div>
    )
}

export default function Features() {
    const [daySelected, setDaySelected] = useState<number>(1);

    return (
        <section className="w-[95%] md:w-5/6 flex flex-col items-center gap-16" id="features">
            <h1 className="text-6xl max-w-xl font-extrabold text-center text-zinc-900 leading-tight text-balance">
                Plan less. Experience more.
            </h1>
            <div className="w-full h-auto md:h-[110svh] flex flex-col md:flex-row gap-16 md:gap-10">
                <div className="w-full md:w-2/3 h-full flex flex-col items-start justify-start gap-16 md:gap-10">
                    <Feature1 />
                    <Feature2
                        daySelected={daySelected}
                        setDaySelected={setDaySelected} />
                </div>
                <Feature3 daySelected={daySelected} />
            </div>
        </section>
    )
}