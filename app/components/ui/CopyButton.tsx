"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CopyButtonProps {
  text: string;
  label?: string;
  disabled?: boolean;
}

export default function CopyButton({
  text,
  label = "Copy",
  disabled = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled || !text) return;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.button
      whileHover={{
        scale: disabled ? 1 : 1.03,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.96,
      }}
      disabled={disabled}
      onClick={handleCopy}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-black/10
        dark:border-white/10
        bg-white/70
        dark:bg-white/[0.05]
        backdrop-blur-xl
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all

        ${
          disabled
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-black/5 dark:hover:bg-white/10"
        }
      `}
    >
      {copied ? (
        <>
          <FiCheck className="text-emerald-500" />
          Copied
        </>
      ) : (
        <>
          <FiCopy />

          {label}
        </>
      )}
    </motion.button>
  );
}
