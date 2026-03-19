import { Compass } from "lucide-react"

export default function ItineraryCardSoon() {
    return (
        <div className="w-full md:w-[calc(33%-10px)] h-[80svh] flex flex-col items-center justify-center text-center gap-4 rounded-xl relative border-2 border-dashed border-zinc-400 bg-gray-100 hover:bg-zinc-300 transition-all duration-200 cursor-default">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-300">
                <Compass className="w-6 h-6 text-zinc-600" />
            </div>

            <div className="flex flex-col gap-1 px-6">
                <h2 className="text-lg font-semibold text-zinc-800">
                    New destinations coming soon
                </h2>

                <p className="text-sm text-zinc-500">
                    More itineraries are on the way. Stay tuned for your next adventure.
                </p>
            </div>

        </div>
    )
}