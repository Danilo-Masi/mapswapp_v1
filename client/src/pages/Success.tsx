export default function Success() {
    return (
        <div className="w-full min-h-svh flex items-center justify-center bg-gray-50">
            <div className="w-[95%] md:w-[60%] flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-lg">

                <h1 className="text-2xl font-bold text-center">
                    Your itinerary is ready 🎉
                </h1>

                <div className="flex flex-col gap-4">

                    {/* STEP 1 */}
                    <div className="p-4 rounded-xl bg-gray-100">
                        <h2 className="font-semibold">1. Where you’ll receive it</h2>
                        <p className="text-sm text-gray-600">
                            You will receive your itinerary link via email (or directly on the confirmation page).
                        </p>
                    </div>

                    {/* STEP 2 */}
                    <div className="p-4 rounded-xl bg-gray-100">
                        <h2 className="font-semibold">2. How to open it</h2>
                        <p className="text-sm text-gray-600">
                            Click the link to open your interactive itinerary in your browser. No app required.
                        </p>
                    </div>

                    {/* STEP 3 */}
                    <div className="p-4 rounded-xl bg-gray-100">
                        <h2 className="font-semibold">3. How to use it</h2>
                        <p className="text-sm text-gray-600">
                            Explore your route, saved places, and suggestions. You can zoom, click pins, and follow the day-by-day plan.
                        </p>
                    </div>

                    {/* STEP 4 */}
                    <div className="p-4 rounded-xl bg-gray-100">
                        <h2 className="font-semibold">4. If something doesn’t work</h2>
                        <p className="text-sm text-gray-600">
                            Try refreshing the page or opening the link in another browser. If the issue persists, contact support.
                        </p>
                    </div>

                </div>

                <button className="mt-4 w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition">
                    Go to my itinerary
                </button>

            </div>
        </div>
    );
}