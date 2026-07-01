"use client";

import Link from "next/link";
import { FiArrowRight, FiTool } from "react-icons/fi";

interface Tool {
  title: string;
  description: string;
  href: string;
}

interface Props {
  tools: Tool[];
}

export default function RelatedTools({ tools }: Props) {
  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Related Tools</h2>

        <p className="mt-3 text-neutral-500">Discover more free tools.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="
            group

            rounded-3xl

            border
            border-black/10
            dark:border-white/10

            bg-white/70
            dark:bg-white/[0.04]

            backdrop-blur-xl

            p-6

            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]

            dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.04)]
            "
          >
            <div
              className="
              mb-5

              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-black/5
              dark:bg-white/10
              "
            >
              <FiTool />
            </div>

            <h3 className="text-lg font-semibold">{tool.title}</h3>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              {tool.description}
            </p>

            <div className="mt-6 flex items-center gap-2 font-medium">
              Open Tool
              <FiArrowRight
                className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                "
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
