import { scrollToElement } from "@/lib/gsap"
import useIsMobile from "@/lib/screenWidth"
import { Search, Globe, ChevronDown, ArrowUpLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

export default function Navbar() {
    const navigate = useNavigate()
    const isMobile = useIsMobile()

    return (
        <div className="w-full flex items-center justify-between px-4 md:px-10 py-4 md:py-3 backdrop-blur-xl bg-white/20 border-b border-zinc-200 z-50 sticky top-0">

            {/* LEFT */}
            <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-bold text-zinc-50 tracking-tight">
                    Mapswapp
                </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-4">

                {/* Expolore */}
                <Button
                    variant="link"
                    onClick={() => scrollToElement("maps")}
                    className={`
                        group flex items-center justify-center transition-all
                        ${isMobile
                            ? "w-11 h-11 rounded-xl bg-zinc-100 active:scale-95"
                            : "px-4 py-2 rounded-xl bg-transparent hover:bg-transparent"
                        }`}>
                    {isMobile ? (
                        <Search className="w-5 h-5 text-zinc-700" />
                    ) : (
                        <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition" />
                            Explore
                        </div>
                    )}
                </Button>

                {/* Build your map */}
                <Button
                    variant="link"
                    onClick={() => navigate("/globe", { replace: true })}
                    className={`
                        group flex items-center justify-center transition-all
                        ${isMobile
                            ? "w-11 h-11 rounded-xl bg-zinc-100 active:scale-95"
                            : "px-4 py-2 rounded-xl bg-transparent hover:bg-transparent"
                        }`}>
                    {isMobile ? (
                        <Globe className="w-5 h-5 text-zinc-700" />
                    ) : (
                        <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                            <ArrowUpLeft className="w-4 h-4 group-hover:rotate-45 transition" />
                            Build your map
                        </div>
                    )}
                </Button>

            </div>
        </div>
    )
}