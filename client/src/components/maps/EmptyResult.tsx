import { RefreshCw } from "lucide-react"
import { Button } from "../ui/button"
import type { Dispatch, SetStateAction } from "react";

interface EmptyResultProps {
    setFilters: Dispatch<SetStateAction<{ destination: string, duration: string, period: string, badge: string }>>;
}

export function EmptyResult({ setFilters }: EmptyResultProps) {
    // Fuction to reset filters
    const handleReset = () => {
        setFilters({
            destination: "",
            duration: "",
            period: "",
            badge: "trending",
        })
    }

    return (
        <div className="w-full flex flex-col items-center justify-center py-20 text-center">

            <h2 className="text-2xl font-semibold text-zinc-800 mb-2">
                No trips found for these filters
            </h2>

            <p className="text-zinc-500 max-w-md text-sm leading-relaxed mb-6">
                Try changing your destination, duration, or travel period.
                Or explore what other travelers are loving right now.
            </p>

            {/* Reset filters */}
            <Button
                onClick={handleReset}
                className="px-6 py-5 rounded-xl bg-blue-500 text-white font-semibold shadow-md hover:scale-105 transition flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Reset filters
            </Button>


        </div>
    )
}