import { AccordionFaq } from "./AccordionFaq";

export default function Faqs() {
    return (
        <section className="w-[95%] md:w-5/6 h-auto min-h-[50svh] flex flex-col md:flex-row items-start justify-between gap-15" id="faqs">
            {/* Head */}
            <div className="w-full md:w-2/5 flex text-center md:text-left">
                <h1 className="text-6xl font-bold text-zinc-900">
                    Still thinking about it?
                </h1>
            </div>
            {/* Accordion */}
            <AccordionFaq />
        </section>
    )
}
