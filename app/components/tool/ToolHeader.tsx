"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

interface Props {
  title: string;
  description: string;
}

export default function ToolHeader({ title, description }: Props) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="mb-14 text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.45em] text-neutral-500">
        FAST WEB TOOLS
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
        {description}
      </p>
    </motion.section>
  );
}
