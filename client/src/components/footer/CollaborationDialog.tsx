import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAppContext } from "@/context/AppContext"
import { BadgePercent, Camera, Mail, Rocket } from "lucide-react"

export default function CollaborationDialog() {
    const { isCollaborationOpen, setCollaborationOpen } = useAppContext()

    return (
        <Dialog open={isCollaborationOpen} onOpenChange={setCollaborationOpen}>
            <DialogContent className="max-w-xs md:max-w-sm rounded-2xl p-6" showCloseButton={false}>

                {/* HEADER */}
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        Work with Mapswapp 🚀
                    </DialogTitle>
                    <DialogDescription className="text-sm text-zinc-500 text-clip">
                        We’re in beta, and opening early spots for creators who want to grow with us.
                    </DialogDescription>
                </DialogHeader>

                {/* CONTENT */}
                <div className="flex flex-col gap-6 mt-2 max-h-[60vh] overflow-y-auto text-clip no-scrollbar">

                    {/* INTRO */}
                    <p className="text-sm text-zinc-600 leading-relaxed text-clip">
                        We’re building the future of travel itineraries, where creators can publish, share and earn from their own routes.
                        <br /><br />
                        If you join now, you’ll be among the first creators on the platform, with higher visibility and early access advantages.
                    </p>

                    {/* OPTIONS */}
                    <div className="flex flex-col gap-4">

                        {/* OPTION 1 */}
                        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition flex items-start gap-3">
                            <Camera className="text-blue-500 mt-1" size={30} />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold text-zinc-900">
                                    Create content
                                </h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Get <span className="font-semibold text-blue-600">50% off</span> an itinerary and share your experience with your audience.
                                </p>
                            </div>
                        </div>

                        {/* OPTION 2 */}
                        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition flex items-start gap-3">
                            <BadgePercent className="text-blue-500 mt-1" size={30} />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold text-zinc-900">
                                    Publish your itinerary
                                </h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Submit your itinerary. If approved, get featured and earn
                                    <span className="font-semibold text-blue-600"> 70% per sale</span>.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* FOMO */}
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex gap-3 items-center">
                        <Rocket className="text-blue-500 mt-1" size={20} />
                        <p className="text-xs text-blue-700">
                            Early creators get priority visibility and a head start as mapswapp grows.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-2 items-center text-center">
                        <a
                            href="mailto:support@mapswapp.com"
                            className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition shadow-lg hover:shadow-xl">
                            Apply now <Mail className="inline-block ml-2" size={18} />
                        </a>
                        <span className="text-xs text-zinc-400">
                            support@mapswapp.com
                        </span>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}