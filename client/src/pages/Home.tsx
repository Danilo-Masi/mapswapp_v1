import Cta from "../components/cta/Cta";
import Faqs from "../components/faqs/Faqs";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Maps from "../components/maps/Maps";
import Navbar from "../components/navbar/Navbar";
import HeroGlobe from "@/components/hero/HeroGlobe";

export default function Home() {
    return (
        <div className="w-full h-auto min-h-svh flex flex-col items-center justify-start gap-20 py-5 bg-zinc-50">
            <Navbar />
            <HeroGlobe />
            <Maps />
            <Features />
            <Faqs />
            <Cta />
            <Footer />
        </div>
    )
}
