import { type ReactNode } from 'react'

export default function LinkContainer({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className="w-full md:w-[calc(20%-20px)] flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-lg font-bold">{title}</h1>
            <ul className="text-base md:text-sm text-zinc-100/70 flex flex-col gap-2 group group:hover:text-white">
                {children}
            </ul>
        </div>
    );
}
