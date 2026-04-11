import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun, Loader, RefreshCw } from "lucide-react"
import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

const categories = [
    { value: "trending", label: "Trending", emoji: "🔥" },
    { value: "new", label: "New", emoji: "✨" },
    { value: "best_value", label: "Best value", emoji: "💎" },
    { value: "hidden_gems", label: "Hidden gems", emoji: "🧭" },
];

const destinations = {
    popular: [
        { value: "italy", label: "Italy", flag: "🇮🇹" },
        { value: "spain", label: "Spain", flag: "🇪🇸" },
        { value: "france", label: "France", flag: "🇫🇷" },
    ],
    europe: [
        { value: "netherlands", label: "Netherlands", flag: "🇳🇱" },
        { value: "croatia", label: "Croatia", flag: "🇭🇷" },
        { value: "hungary", label: "Hungary", flag: "🇭🇺" },
        { value: "austria", label: "Austria", flag: "🇦🇹" },
        { value: "portugal", label: "Portugal", flag: "🇵🇹" },
        { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
    ],
    america: [
        { value: "usa", label: "USA", flag: "🇺🇸" },
    ]
}

const durations = [
    { value: "1", label: "1 day" },
    { value: "2", label: "2 days" },
    { value: "3", label: "3 days" },
    { value: "5", label: "5 days" },
    { value: "7", label: "1 week" },
    { value: "10", label: "10 days" },
    { value: "14", label: "2+ weeks" },
];

const periods = [
    { value: "spring", label: "Spring", emoji: "🌸" },
    { value: "summer", label: "Summer", emoji: "☀️" },
    { value: "autumn", label: "Autumn", emoji: "🍂" },
    { value: "winter", label: "Winter", emoji: "❄️" },
    { value: "all", label: "All seasons", emoji: "🌍" },
];

function DestinationSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Where or what vibe?" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl" position="popper">

                {/* CATEGORY */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mb-1">
                        Explore
                    </SelectLabel>
                    {categories.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.emoji}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

                {/* DESTINATIONS */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Popular
                    </SelectLabel>
                    {destinations.popular.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Europe
                    </SelectLabel>
                    {destinations.europe.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        America
                    </SelectLabel>
                    {destinations.america.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

            </SelectContent>
        </Select>
    )
}

function DurationSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Duration" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl">
                {durations.map((d) => (
                    <SelectItem key={d.value} value={d.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                        {d.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

function PeriodSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <Sun className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="When?" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl">
                {periods.map((p) => (
                    <SelectItem key={p.value} value={p.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                            <span>{p.emoji}</span>
                            <span>{p.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

function Separator() {
    return <div className="hidden md:block w-px h-10 bg-zinc-200" />
}

function SelectSection({ children }: { children: ReactNode }) {
    return (
        <div className="flex-1 w-full hover:bg-zinc-50 rounded-xl px-3 py-2 transition">
            {children}
        </div>
    )
}

interface SearchBarProps {
    setFilters: Dispatch<SetStateAction<{ destination: string, duration: string, period: string, badge: string }>>;
    isExploreLoading: boolean;
    setExploreLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBar({ setFilters, isExploreLoading, setExploreLoading }: SearchBarProps) {
    const [destination, setDestination] = useState("trending")
    const [duration, setDuration] = useState("")
    const [period, setPeriod] = useState("")
    const [badge, setBadge] = useState("trending")

    const handleDestinationChange = (value: string) => {
        const isCategory = ["trending", "new", "best_value", "hidden_gems"].includes(value)

        if (isCategory) {
            setBadge(value)
            setDestination("")
        } else {
            setDestination(value)
            setBadge("")
        }
    }

    // Function to set filters
    const handleSearch = () => {
        setExploreLoading(true)
        setFilters({
            destination,
            duration,
            period,
            badge,
        })
        setExploreLoading(false);
    }

    // Fuction to reset filters
    const handleReset = () => {
        setDestination("")
        setDuration("")
        setPeriod("")
        setBadge("trending")

        setFilters({
            destination: "",
            duration: "",
            period: "",
            badge: "trending",
        })
    }

    return (
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200 px-4 py-4 md:py-3 flex flex-col md:flex-row items-center gap-4 relative">

            <SelectSection>
                <DestinationSelect value={destination || badge} onChange={handleDestinationChange} />
            </SelectSection>

            <Separator />

            <SelectSection>
                <DurationSelect value={duration} onChange={setDuration} />
            </SelectSection>

            <Separator />

            <SelectSection>
                <PeriodSelect value={period} onChange={setPeriod} />
            </SelectSection>

            <Separator />

            <Button
                onClick={handleSearch}
                disabled={isExploreLoading}
                className="md:ml-2 w-full md:w-auto px-6 py-5 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition flex items-center justify-center gap-2">
                {isExploreLoading ? (
                    <>
                        Loading
                        <Loader className="w-4 h-4 animate-spin" />
                    </>
                ) : (
                    <>
                        Explore
                        <Search className="w-4 h-4" />
                    </>
                )}
            </Button>

            <Button
                onClick={handleReset}
                disabled={isExploreLoading}
                className="text-white bg-zinc-200 hover:bg-zinc-400 w-min h-min p-3 transition">
                <RefreshCw size={18} />
            </Button>
        </div>
    )
}