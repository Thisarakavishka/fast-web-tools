"use client";

import { motion } from "framer-motion";

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  border?: boolean;
}

export default function InfoRow({ label, value, border = true }: InfoRowProps) {
  return (
    <motion.div
      whileHover={{
        x: 3,
      }}
      className={`
        flex
        items-center
        justify-between
        gap-6
        py-4

        ${border ? "border-b border-black/10 dark:border-white/10" : ""}
      `}
    >
      <p
        className="
        text-sm
        font-medium
        text-neutral-500
        shrink-0
        "
      >
        {label}
      </p>

      <div
        className="
        flex
        items-center
        justify-end
        text-right
        font-semibold
        break-all
        "
      >
        {value}
      </div>
    </motion.div>
  );
}
