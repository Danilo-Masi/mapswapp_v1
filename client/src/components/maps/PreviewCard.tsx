import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAppContext } from "@/context/AppContext";

export default function PreviewCard() {
    const { isPreviewOpen, setPreviewOpen } = useAppContext();

    return (
        <Dialog open={isPreviewOpen} onOpenChange={setPreviewOpen}>
            <DialogContent showCloseButton={false}>
                <div className="w-full h-[30svh] bg-red-500">
                    mappa
                </div>
                <div className="w-full h-[30svh] bg-red-500">
                    elenco + button
                </div>
            </DialogContent>
        </Dialog>
    )
}
