"use client";

import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export default function ToolStats({ icon, label, value }: Props) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-3xl

        border
        border-black/10
        dark:border-white/10

        bg-white/70
        dark:bg-white/[0.04]

        backdrop-blur-xl

        p-6

        shadow-[0_10px_35px_rgba(0,0,0,0.05)]
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.30)]
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

          text-xl
        "
      >
        {icon}
      </div>

      <p
        className="
          text-3xl
          font-bold
          tracking-tight
        "
      >
        {value}
      </p>

      <p
        className="
          mt-2
          text-sm
          text-neutral-500
        "
      >
        {label}
      </p>
    </motion.div>
  );
}
