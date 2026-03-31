import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun } from "lucide-react"

function DestinationSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full border-none shadow-none pl-6 text-base md:text-sm font-medium">
                <SelectValue placeholder="Where do you want to go?" />
            </SelectTrigger>
            <SelectContent position="popper" className="p-2">
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="italy">🇮🇹 Italy</SelectItem>
                    <SelectItem value="spain">🇪🇸 Spain</SelectItem>
                    <SelectItem value="france">🇫🇷 France</SelectItem>
                    <SelectItem value="netherlands">🇳🇱 Netherlands</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="japan">🇯🇵 Japan</SelectItem>
                    <SelectItem value="thailand">🇹🇭 Thailand</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>America</SelectLabel>
                    <SelectItem value="usa">🇺🇸 USA</SelectItem>
                    <SelectItem value="brazil">🇧🇷 Brazil</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function DurationSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full border-none shadow-none pl-6 text-base md:text-sm font-medium">
                <SelectValue placeholder="How many days?" />
            </SelectTrigger>
            <SelectContent position="popper" className="p-2">
                <SelectItem value="1">1 day</SelectItem>
                <SelectItem value="2">2 days</SelectItem>
                <SelectItem value="3">3 days</SelectItem>
                <SelectItem value="5">5 days</SelectItem>
                <SelectItem value="7">1 week</SelectItem>
                <SelectItem value="10">10 days</SelectItem>
                <SelectItem value="14">More than 2 weeks</SelectItem>
            </SelectContent>
        </Select>
    )
}

function PeriodSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full border-none shadow-none pl-6 text-base md:text-sm font-medium">
                <SelectValue placeholder="When are you going?" />
            </SelectTrigger>
            <SelectContent position="popper" className="p-2">
                <SelectItem value="spring">🌸 Spring</SelectItem>
                <SelectItem value="summer">☀️ Summer</SelectItem>
                <SelectItem value="autumn">🍂 Autumn</SelectItem>
                <SelectItem value="winter">❄️ Winter</SelectItem>
                <SelectItem value="all">🌍 All seasons</SelectItem>
            </SelectContent>
        </Select>
    )
}

function Separator() {
    return <div className="hidden md:block w-px h-10 bg-zinc-200" />
}

export default function SearchBar() {
    return (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-zinc-200 px-6 py-8 md:py-5 flex flex-col md:flex-row items-center gap-x-4 gap-y-8 relative">

            {/* Destination */}
            <div className="flex-1 flex items-start gap-3 w-full">
                <div className="flex flex-col w-full">
                    <span className="text-sm md:text-xs text-zinc-400 flex gap-1 items-center"><MapPin className="w-5 md:w-4 h-5 md:h-4 text-zinc-400" />Destination</span>
                    <DestinationSelect />
                </div>
            </div>

            <Separator />

            {/* Duration */}
            <div className="flex-1 flex items-start gap-3 w-full">
                <div className="flex flex-col w-full">
                    <span className="text-sm md:text-xs text-zinc-400 flex gap-1 items-center"><CalendarDays className="w-5 md:w-4 h-5 md:h-4 text-zinc-400" />Duration</span>
                    <DurationSelect />
                </div>
            </div>

            <Separator />

            {/* Period */}
            <div className="flex-1 flex items-start gap-3 w-full">
                <div className="flex flex-col w-full">
                    <span className="text-sm md:text-xs text-zinc-400 flex gap-1 items-center"><Sun className="w-5 md:w-4 h-5 md:h-4 text-zinc-400" />When</span>
                    <PeriodSelect />
                </div>
            </div>

            {/* Button */}
            <Button
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:p-5 px-12 py-5 rounded-lg bg-amber-400 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                Explore
                <Search className="w-4 h-4" />
            </Button>

        </div>
    )
}