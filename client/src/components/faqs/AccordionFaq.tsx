import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      defaultChecked={true}
      className="w-full md:max-w-2xl rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
