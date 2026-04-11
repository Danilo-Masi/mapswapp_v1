import { useNavigate } from "react-router-dom"
import LinkContainer from "./LinkContainer";
import icon from "../../assets/icon.svg";

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    return (
        <footer className="w-[95%] md:w-5/6 border-t border-zinc-200">

            {/* TOP */}
            <div className="w-full py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* BRAND */}
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <img src={icon} className="w-10 h-10" />
                        <h1 className="text-2xl font-extrabold">
                            <span className="text-blue-500">Map</span>swapp
                        </h1>
                    </div>

                    <p className="text-base md:text-sm text-zinc-500 text-center md:text-left text-balance">
                        Ready to follow itineraries, instantly on Google Maps.
                    </p>
                    <p className="text-xs text-zinc-400">
                        No apps to download • Instant access
                    </p>
                </div>

                {/* NAVIGATION */}
                <LinkContainer title="Navigation">
                    <li
                        onClick={() => navigate("/globe")}
                        className="hover:text-amber-400 cursor-pointer transition font-semibold">Build your map</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">How it works</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">Browse itineraries</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">FAQ</li>
                </LinkContainer>

                {/* LEGAL */}
                <LinkContainer title="Legal">
                    <li
                        onClick={() => navigate("/terms")}
                        className="hover:text-amber-400 cursor-pointer transition">
                        Terms of Service
                    </li>
                    <li
                        onClick={() => navigate("/privacy")}
                        className="hover:text-amber-400 cursor-pointer transition">
                        Privacy Policy
                    </li>
                </LinkContainer>

                {/* COMMUNITY */}
                <LinkContainer title="Community">
                    <li className="hover:text-amber-400 cursor-pointer transition">Instagram</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">TikTok</li>
                    <li className="hover:text-amber-400 cursor-pointer transition font-semibold">Become a creator</li>
                </LinkContainer>
            </div>

            {/* BOTTOM */}
            <div className="w-full border-t border-zinc-200 py-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
                <p className="text-xs text-zinc-400">
                    © {year} Mapswapp All rights reserved.
                </p>
                <p className="text-xs text-zinc-400 hover:text-amber-400 cursor-pointer transition">
                    Sitemap
                </p>
            </div>

        </footer>
    )
}