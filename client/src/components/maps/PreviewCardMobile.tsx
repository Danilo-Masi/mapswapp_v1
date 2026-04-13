import { useAppContext } from "@/context/AppContext";
import { Drawer, DrawerContent } from "../ui/drawer";

export default function PreviewCardMobile() {
    const { isPreviewOpen, setPreviewOpen } = useAppContext();
    return (
        <Drawer open={isPreviewOpen} onOpenChange={setPreviewOpen}>
            <DrawerContent>
                <div className="w-full h-[30svh] bg-red-500">
                    mappa
                </div>
                <div className="w-full h-[30svh] bg-red-500">
                    elenco + button
                </div>
            </DrawerContent >
        </Drawer>
    )
}
