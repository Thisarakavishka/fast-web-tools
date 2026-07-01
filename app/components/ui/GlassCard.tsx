"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-3xl
        border
        border-black/10
        dark:border-white/10
        bg-white/70
        dark:bg-white/[0.04]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,.05)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,.35)]
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
