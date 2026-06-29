"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ToolCard({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
      rounded-[32px]
      border
      border-black/10
      dark:border-white/10

      bg-white/70
      dark:bg-white/[0.04]

      backdrop-blur-2xl

      shadow-[0_20px_70px_rgba(0,0,0,0.06)]
      dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]

      p-7
      md:p-8
      "
    >
      {children}
    </motion.section>
  );
}
