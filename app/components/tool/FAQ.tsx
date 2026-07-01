"use client";

import Accordion from "./Accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQ({ items }: Props) {
  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 text-neutral-500 max-w-2xl">
          Everything you need to know about this tool.
        </p>
      </div>

      <div
        className="
        rounded-3xl
        border
        border-black/10
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-xl
        px-8
        "
      >
        {items.map((item) => (
          <Accordion key={item.question} title={item.question}>
            {item.answer}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
