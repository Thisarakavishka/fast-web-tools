"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function ToolActionButton({
  children,
  onClick,
  primary = false,
  icon,
  disabled = false,
}: Props) {
  return (
    <motion.button
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-full

        px-6
        py-3

        font-medium

        transition-all

        duration-300

        disabled:pointer-events-none
        disabled:opacity-40

        ${
          primary
            ? `
              bg-black
              text-white

              dark:bg-white
              dark:text-black

              hover:opacity-90

              shadow-lg
            `
            : `
              border
              border-black/10
              dark:border-white/10

              bg-white/60
              dark:bg-white/[0.04]

              backdrop-blur-xl

              hover:bg-black/5
              dark:hover:bg-white/10
            `
        }
      `}
    >
      {icon}

      {children}
    </motion.button>
  );
}
