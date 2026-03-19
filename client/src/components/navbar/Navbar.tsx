import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[6svh] flex items-center justify-between">
            <h1
                className="text-3xl font-extrabold">
                Viat<span className="text-amber-300">ora</span>
            </h1>
            <div className="w-min flex items-center justify-center gap-3">
                <Button
                    onClick={() => navigate("/globe")}
                    size="icon-lg">
                    <Globe />
                </Button>
                <Button
                    size="lg"
                    className="px-5 text-base font-bold bg-amber-300 text-zinc-900 flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-200">
                    Browse itineraries
                </Button>
            </div>
        </div>
    )
}
