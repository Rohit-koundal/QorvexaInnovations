import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="surface-card divide-y divide-[#e7e1d9] overflow-hidden">
      {items.map((item) => (
        <details key={item.question} className="group px-5 open:bg-[#fffdfa] sm:px-6">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-sm font-extrabold text-[#071522] marker:hidden">
            {item.question}
            <ChevronDown className="size-4 shrink-0 text-[#b77b2c] transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="max-w-3xl pb-5 text-sm leading-7 text-[#687079]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
