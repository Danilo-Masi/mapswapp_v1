import { Battery, Camera, Hotel, Martini, Signal, UtensilsCrossed, Wifi } from "lucide-react";
// Image
import features3 from "../../assets/features3.png";

export default function PhoneMockup() {
    return (
        <div className="w-full h-[70svh] rounded-t-[3.5rem] p-2 pb-0 bg-zinc-900 relative shadow-2xl shadow-blue-500">
            {/* BUTTONS */}
            <div className="w-[1svh] h-[4svh] absolute top-20 -left-0.5 rounded-full bg-zinc-900" />
            <div className="w-[1svh] h-[5svh] absolute top-40 -left-0.5 rounded-full bg-zinc-900" />
            <div className="w-[1svh] h-[5svh] absolute top-50 -left-0.5 rounded-full bg-zinc-900" />

            <div className="w-full h-full rounded-t-[3rem] flex flex-col items-center justify-start gap-5 overflow-hidden relative bg-zinc-100">

                {/* BG IMAGE */}
                <img src={features3} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
                <div className="w-full h-[7svh] absolute top-0 left-0 bg-linear-to-b from-zinc-50 via-zinc-50/50 to-transparent rounded-t-[3rem] z-10" />

                {/* HEADER */}
                <div className="w-full h-[8svh] flex items-center justify-between px-5 z-20">
                    <h1 className="w-1/3 text-sm font-semibold">19:20</h1>
                    <div className="w-1/3 h-[4svh] rounded-full flex items-center bg-zinc-900">
                        <div className="w-4 h-4 rounded-full ml-2 bg-zinc-700" />
                    </div>
                    <div className="w-1/3 flex justify-end gap-2">
                        <Signal size={18} />
                        <Wifi size={18} />
                        <Battery size={18} fill="black" />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="w-full h-full z-20 relative">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-10 left-32 text-sm bg-red-600 text-white font-semibold ">1</div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-24 left-8 text-sm bg-red-600 text-white font-semibold " >2</div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-50 left-64 text-sm bg-red-600 text-white font-semibold " >3</div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-70 left-20 text-sm bg-red-600 text-white font-semibold " >4</div>
                    {/* Resturant */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-5 left-64 bg-red-900 text-white font-semibold " ><UtensilsCrossed size={12} /></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-80 left-32 bg-red-900 text-white font-semibold " ><UtensilsCrossed size={12} /></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-40 left-40 bg-red-900 text-white font-semibold " ><UtensilsCrossed size={12} /></div>
                    {/* Bar */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-20 left-60 bg-blue-900 text-white font-semibold " ><Martini size={12} /></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-28 left-32 bg-blue-900 text-white font-semibold " ><Martini size={12} /></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-40 left-28 bg-blue-900 text-white font-semibold " ><Martini size={12} /></div>
                    {/* Hotel */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-72 left-60 bg-violet-600 text-white font-semibold " ><Hotel size={12} /></div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-28 left-32 bg-violet-600 text-white font-semibold " ><Hotel size={12} /></div>
                    {/* Photo spot */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-80 left-64 bg-amber-500 text-white font-semibold " ><Camera size={12} /></div>
                </div>

                {/* FLOATING CARD (KEY UX) */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl p-3 shadow-lg flex flex-col gap-1 z-30">
                    <h3 className="text-xs text-zinc-400">Day 1</h3>
                    <h2 className="text-sm font-semibold text-zinc-900">
                        Bronx food & hidden spots
                    </h2>
                </div>

            </div>
        </div>
    )
}
