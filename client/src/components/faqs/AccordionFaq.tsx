import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// Data
import { faqs } from "@/data/faqs"

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      defaultValue="how_it_works"
      className="w-full md:w-3/5 rounded-2xl border border-zinc-200 bg-white shadow-xl">
      {faqs.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b border-zinc-200 last:border-none">
          <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-zinc-900 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
