import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
// Data
import { termsOfService } from "@/data/terms";

export default function TermsService() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex items-center justify-center bg-zinc-50">
            <div className="w-[90%] md:w-2/4 flex flex-col gap-8 py-5">
                <Button className="w-min p-5 rounded-xl" onClick={() => navigate(-1)}>
                    <ChevronLeft />Back
                </Button>
                {termsOfService.map((section) => (
                    <section
                        key={section.title}
                        className="w-full h-auto flex flex-col gap-2">

                        <h2 className="text-lg font-semibold">
                            {section.title}
                        </h2>

                        {section.content.map((item, i) => {
                            if (item.type === "text") {
                                return (
                                    <p key={i} className="text-sm text-balance leading-relaxed text-zinc-600">
                                        {item.value}
                                    </p>
                                );
                            }

                            if (item.type === "list") {
                                return (
                                    <ul key={i} className="text-sm text-balance leading-relaxed space-y-1 list-disc pl-5 text-zinc-600">
                                        {item.value.map((li, idx) => (
                                            <li key={idx}>{li}</li>
                                        ))}
                                    </ul>
                                );
                            }

                            if (item.type === "link") {
                                return (
                                    <a
                                        href="mailto:support@mapswapp.com"
                                        className="text-sm text-zinc-900 hover:text-blue-500">
                                        support@mapswapp.com
                                    </a>
                                )
                            }
                        })}
                    </section>
                ))}
            </div>
        </div>
    )
}
