import { Flag, Heart } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default function ToggleButtons({ value, onChange }: any) {
    return (
        <ToggleGroup
            variant="outline"
            type="single"
            defaultValue="visited"
            size="lg"
            value={value}
            onValueChange={(val) => val && onChange(val)}>
            <ToggleGroupItem value="visited" aria-label="Toggle visited" className="flex gap-2 cursor-pointer">
                <Flag fill="currentColor" />Visited
            </ToggleGroupItem>
            <ToggleGroupItem value="wishlist" aria-label="Toggle wishlist" className="flex gap-2 cursor-pointer">
                <Heart fill="currentColor" /> Wishlist
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
