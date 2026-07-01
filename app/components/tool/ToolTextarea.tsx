"use client";

import { motion } from "framer-motion";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export default function ToolTextarea({
  value,
  onChange,
  placeholder,
  readOnly = false,
}: Props) {
  return (
    <motion.textarea
      layout
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      spellCheck={false}
      onChange={(e) => onChange(e.target.value)}
      className="
      w-full

      min-h-[420px]

      resize-y

      rounded-3xl

      border

      border-black/10
      dark:border-white/10

      bg-white/60
      dark:bg-black/20

      backdrop-blur-xl

      p-6

      font-mono

      text-[15px]

      leading-7

      outline-none

      transition-all

      duration-300

      placeholder:text-neutral-400

      focus:border-black
      dark:focus:border-white

      focus:ring-4

      focus:ring-black/5
      dark:focus:ring-white/10
      "
    />
  );
}
