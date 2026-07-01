"use client";

import { motion } from "framer-motion";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EmptyState({
  icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        min-h-[340px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-black/10
        dark:border-white/10
        bg-white/40
        dark:bg-white/[0.03]
        p-10
        text-center
      "
    >
      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-black/5
          dark:bg-white/10
          text-3xl
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p
        className="
          mt-4
          max-w-md
          leading-7
          text-neutral-500
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
