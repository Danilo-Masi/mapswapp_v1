import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun } from "lucide-react"

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

function DestinationSelect() {
    return (
        <Select>
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center justify-between gap-2 px-5 py-8 cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Where to?" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
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

function DurationSelect() {
    return (
        <Select>
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

function PeriodSelect() {
    return (
        <Select>
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


export default function SearchBarMobile() {
    return (
        <div className="w-full h-auto min-h-[50svh] flex flex-col items-start justify-start gap-6">
            <DestinationSelect />
            <DurationSelect />
            <PeriodSelect />
            <Button
                className="w-full p-8 text-base font-semibold bg-blue-500 text-white shadow-xl shadow-blue-500/30">
                Explore
                <Search className="ml-2" size={18} />
            </Button>
        </div>
    )
}
