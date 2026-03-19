import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const items = [
  {
    value: "purchase",
    trigger: "How does it work?",
    content: "Choose an itinerary, complete the payment, and instantly receive a Google Maps link with all locations organized day by day."
  },
  {
    value: "receive",
    trigger: "What do I get after buying?",
    content: "You’ll get a ready-to-use Google Maps itinerary with places to visit, restaurants, and hidden gems — all perfectly organized for your trip."
  },
  {
    value: "creators",
    trigger: "Who creates the itineraries?",
    content: "Each itinerary is created by experienced travelers and curated by the Viatora team. Soon, anyone will be able to create and sell their own."
  },
  {
    value: "customization",
    trigger: "Can I customize the itinerary?",
    content: "Yes. Once opened in Google Maps, you can easily adjust routes, add stops, or personalize your trip however you like."
  },
  {
    value: "delivery",
    trigger: "When will I receive it?",
    content: "Immediately after payment. Check your inbox (and spam folder just in case) for your Google Maps link."
  },
];

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:max-w-2xl rounded-2xl border border-zinc-200 bg-white shadow-sm">
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b border-zinc-200 last:border-none">
          <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-zinc-900 hover:text-amber-500 transition-colors duration-200 cursor-pointer">
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
