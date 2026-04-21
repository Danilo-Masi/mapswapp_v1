import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
// Data
import { privacyPolicy } from "@/data/privacy";

export default function PrivacyPolicy() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex items-center justify-center bg-zinc-50">
            <div className="w-[90%] md:w-2/4 flex flex-col gap-8 py-5">
                <Button className="w-min p-5 rounded-xl" onClick={() => navigate(-1)}>
                    <ChevronLeft />Back
                </Button>
                {privacyPolicy.map((section) => (
                    <section
                        key={section.id}
                        className="w-full h-auto flex flex-col gap-2">

                        <h2 className="text-lg font-semibold">
                            {section.title}
                        </h2>

                        {section.content.map((item, i) => {
                            return (
                                <p key={i} className="text-sm text-balance leading-relaxed text-zinc-600">
                                    {item}
                                </p>
                            );
                        })}

                        {section.list?.map((item, i) => {
                            return (
                                <ul key={i} className="text-sm text-balance leading-relaxed space-y-1 list-disc pl-5 text-zinc-600">
                                    <li key={i}>
                                        {item}
                                    </li>
                                </ul>
                            );
                        })}

                        {section.link !== undefined &&
                            <a
                                href="mailto:support@mapswapp.com"
                                className="text-sm text-zinc-900 hover:text-blue-500">
                                {section.link}
                            </a>
                        }

                    </section>
                ))}
            </div>
        </div>
    )
}
