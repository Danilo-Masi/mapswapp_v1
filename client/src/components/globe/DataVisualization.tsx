export default function DataVisualization({ data, info }: { data: string; info: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-sm text-zinc-800 font-semibold">{data}</h1>
            <h3 className="text-xs text-zinc-400 text-balance">{info}</h3>
        </div>
    )
}
