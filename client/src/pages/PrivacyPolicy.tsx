import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex items-center justify-center bg-zinc-50">
            <div className="w-[90%] md:w-2/4 flex flex-col gap-8 py-5">
                <Button className="w-min p-5 rounded-xl" onClick={() => navigate(-1)}>
                    <ChevronLeft />Back
                </Button>
                {Array(10).fill(0).map((_, i) => (
                    <div className="w-full flex flex-col gap-3">
                        <h2 className="text-xl font-bold">Privacy Policy {i + 1}</h2>
                        <p key={i} className="text-sm text-balance text-zinc-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ornare urna. Suspendisse scelerisque vel turpis ut condimentum. Vestibulum hendrerit aliquam leo et viverra. Donec fringilla dolor non massa pretium posuere. Nulla tempor consectetur odio nec viverra. Donec eget tellus nibh. Quisque quis fringilla lorem. Nam euismod convallis gravida. Cras eget consequat turpis. In in ante vel urna suscipit luctus eget vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ultrices nunc, id luctus arcu cursus sit amet. Sed bibendum lectus odio, at sagittis velit semper a.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
