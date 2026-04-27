export default function Navbar() {
    return (
        <nav
            aria-label="Main navigation"
            className="w-full flex items-center justify-start px-4 md:px-30 py-4 z-50">

            {/* LEFT */}
            <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-bold text-zinc-50 tracking-tight">
                    Mapswapp
                </h1>
            </div>

        </nav>
    )
}