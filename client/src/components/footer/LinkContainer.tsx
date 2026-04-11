import { type ReactNode } from 'react'

export default function LinkContainer({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-lg font-bold">{title}</h1>
            <ul className="text-base md:text-sm text-zinc-500 flex flex-col gap-2">
                {children}
            </ul>
        </div>
    );
}
