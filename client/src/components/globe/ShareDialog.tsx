import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAppContext } from "@/context/AppContext";

export default function ShareDialog() {
    const { isShareDialogOpen, setShareDialogOpen } = useAppContext();
    
    return (
        <Dialog open={isShareDialogOpen} onOpenChange={setShareDialogOpen}>
            <DialogContent className="max-w-lg p-6 flex flex-col gap-6">

                ciao

            </DialogContent>
        </Dialog>
    );
}