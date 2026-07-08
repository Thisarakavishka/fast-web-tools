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
    <section className="mt-12">
      {/* Heading */}

      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Common questions about this tool.
        </p>
      </div>

      {/* FAQ */}

      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-black/10
          dark:border-white/10
          bg-white/70
          dark:bg-white/[0.03]
          backdrop-blur-lg
          shadow-sm
          px-4
          md:px-5
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
