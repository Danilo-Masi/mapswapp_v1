import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function () {
    return (
        <div className="w-full md:w-5/6 h-[6svh] flex items-center justify-start">
            {/* LEFT */}
            <div className="w-1/2 h-full flex items-center justify-start">
                <h1
                    className="text-3xl font-extrabold">
                    Viat<span className="text-amber-300">ora</span>
                </h1>
            </div>
            {/* RIGHT */}
            <div className="w-1/2 h-full flex items-center justify-end gap-3">
                <Button
                    className="px-5 h-full text-base font-bold bg-amber-300 text-zinc-900 flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-200">
                    Explore <Search />
                </Button>
            </div>
        </div>
    )
}
