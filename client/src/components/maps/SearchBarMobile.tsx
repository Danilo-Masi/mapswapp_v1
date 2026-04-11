import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun, Loader } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from "react";

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
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center justify-between gap-2 px-5 py-8 cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Where to?" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
                {/* Category */}
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
                {/* Popular */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mb-1">
                        Popular
                    </SelectLabel>
                    {destinations.popular.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
                {/* Europe */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Europe
                    </SelectLabel>
                    {destinations.europe.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
                {/* America */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        America
                    </SelectLabel>
                    {destinations.america.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
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
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center gap-2 px-5 py-8 cursor-pointer">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Duration" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
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
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center gap-2 px-5 py-8 cursor-pointer">
                <Sun className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="When?" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
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

interface SearchBarProps {
    setFilters: Dispatch<SetStateAction<{ destination: string, duration: string, period: string, badge: string }>>;
    isExploreLoading: boolean;
    setExploreLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBarMobile({ setFilters, isExploreLoading, setExploreLoading }: SearchBarProps) {
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

    return (
        <div className="w-full h-auto min-h-[50svh] flex flex-col items-start justify-start gap-6">
            <DestinationSelect value={destination || badge} onChange={handleDestinationChange} />
            <DurationSelect value={period} onChange={setPeriod} />
            <PeriodSelect value={period} onChange={setPeriod} />
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
        </div>
    )
}
