import { useNavigate } from "react-router-dom"
import LinkContainer from "./LinkContainer";
import { useAppContext } from "@/context/AppContext";
import { scrollToElement } from "@/lib/gsap";

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();
    const { setCollaborationOpen } = useAppContext();

    return (
        <footer className="w-full md:px-10 overflow-hidden bg-blue-900 text-zinc-50">

            {/* TOP */}
            <div className="w-full py-16 flex flex-col md:flex-row gap-10">

                {/* BRAND */}
                <div className="w-full md:w-[calc(20%-20px)] flex flex-col gap-3 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <h1 className="text-2xl font-extrabold">
                            Mapswapp
                        </h1>
                    </div>

                    <p className="text-base md:text-sm text-zinc-200/70 text-center md:text-left text-balance">
                        Ready to follow itineraries, instantly on Google Maps.
                    </p>
                    <p className="text-xs text-zinc-200/60">
                        No apps to download • Instant access
                    </p>
                </div>

                {/* NAVIGATION */}
                <LinkContainer title="Navigation">
                    <li
                        onClick={() => navigate("/globe")}
                        className="cursor-pointer transition font-semibold hover:text-zinc-50">
                        Build your map
                    </li>
                    <li
                        onClick={() => scrollToElement("features")}
                        className="cursor-pointer transition hover:text-zinc-50">
                        How it works
                    </li>
                    <li
                        onClick={() => scrollToElement("maps")}
                        className="cursor-pointer transition hover:text-zinc-50">
                        Browse itineraries
                    </li>
                    <li
                        onClick={() => scrollToElement("faqs")}
                        className="cursor-pointer transition hover:text-zinc-50">
                        FAQs
                    </li>
                </LinkContainer>

                {/* LEGAL */}
                <LinkContainer title="Legal">
                    <li
                        onClick={() => navigate("/terms")}
                        className="cursor-pointer transition hover:text-zinc-50">
                        Terms of Service
                    </li>
                    <li
                        onClick={() => navigate("/privacy")}
                        className="cursor-pointer transition hover:text-zinc-50">
                        Privacy Policy
                    </li>
                </LinkContainer>

                {/* COMMUNITY */}
                <LinkContainer title="Community">
                    <li className="cursor-pointer transition hover:text-zinc-50">Instagram</li>
                    <li className="cursor-pointer transition hover:text-zinc-50">TikTok</li>
                    <li
                        onClick={() => setCollaborationOpen(true)}
                        className="cursor-pointer transition font-semibold hover:text-zinc-50">
                        Collaborate with us
                    </li>
                </LinkContainer>

                {/* OTHER */}
                <LinkContainer title="Other by founder">
                    <li
                        className="cursor-pointer transition hover:text-zinc-50">
                        postonreddit
                    </li>
                </LinkContainer>
            </div>

            {/* BOTTOM */}
            <div className="w-full border-t-[0.5px] border-zinc-100/50 py-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
                <p className="text-xs text-zinc-100">
                    © {year} Mapswapp All rights reserved.
                </p>
                <p className="text-xs text-zinc-100 hover:underline cursor-pointer transition">
                    Sitemap
                </p>
            </div>

            <div className="w-full h-auto min-h-[10svh] md:min-h-[35svh] relative flex justify-center ">
                <h1 className="text-6xl md:text-[15rem] font-extrabold text-center absolute -bottom-2 md:-bottom-10">Maspwapp</h1>
            </div>

        </footer>
    )
}