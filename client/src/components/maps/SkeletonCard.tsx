import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <Card className="w-full md:w-[calc(33%-18px)] h-[80svh] rounded-2xl overflow-hidden border border-zinc-200 relative">

            {/* IMAGE */}
            <Skeleton className="absolute inset-0 w-full h-full" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* BADGE */}
            <Skeleton className="absolute top-5 left-5 w-20 h-6 rounded-full" />

            {/* SAVE BUTTON */}
            <Skeleton className="absolute top-5 right-5 w-10 h-10 rounded-full" />

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-3">

                {/* TITLE + PRICE */}
                <div className="flex justify-between items-center gap-2">
                    <Skeleton className="h-5 w-2/3 rounded-md" />
                    <Skeleton className="h-6 w-16 rounded-lg" />
                </div>

                {/* META */}
                <Skeleton className="h-3 w-1/3 rounded-md" />

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-5/6 rounded-md" />
                </div>

                {/* CTA */}
                <Skeleton className="h-12 w-full rounded-xl mt-2" />

            </div>
        </Card>
    )
}