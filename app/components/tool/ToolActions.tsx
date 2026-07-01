"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ToolActions({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="
        mt-8
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
      "
    >
      {children}
    </motion.div>
  );
}
