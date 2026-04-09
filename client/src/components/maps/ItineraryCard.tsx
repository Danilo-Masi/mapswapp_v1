import { Bookmark, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface ItineraryCardInterface {
    image: string;
    title: string;
    price: string;
    state: string;
    days: number;
    description: string;
}

export default function ItineraryCard({ image, title, price, state, days, description }: ItineraryCardInterface) {

    return (
        <div className="w-full md:w-[calc(33%-10px)] h-[80svh] rounded-xl relative overflow-hidden border border-zinc-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">

            <div className="w-full h-full absolute top-0 left-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Image */}
            <img src={image} className="w-full h-full object-cover" />

            {/* Badge */}
            <div className="absolute top-5 left-5 bg-amber-300 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
                New map
            </div>

            {/* Save */}
            <div className="absolute top-5 right-5 p-3 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-black transition">
                <Bookmark color="white" size={18} />
            </div>

            {/* Info */}
            <section className="flex flex-col w-full absolute bottom-0 left-0 p-5 bg-linear-to-t from-black/90 via-black/60 to-transparent">

                {/* Title + Price */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white">
                        {title}
                    </h1>

                    <p className="py-1 px-3 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white rounded-xl border border-white/20">
                        {price}
                    </p>
                </div>

                {/* Meta */}
                <p className="text-white/70 text-xs mt-1 mb-2">
                    {state} • {days} days
                </p>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-4">
                    {description}
                </p>

                {/* CTA */}
                <Button className="w-full py-6 bg-blue-500 text-white font-semibold text-base rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
                    Open in Google Maps <ChevronRight size={18} />
                </Button>

            </section>

        </div>

    )
}
