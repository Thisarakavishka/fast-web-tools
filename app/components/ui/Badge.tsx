"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
  FiInfo,
} from "react-icons/fi";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "default";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const styles: Record<
  BadgeVariant,
  {
    icon: React.ReactNode;
    className: string;
  }
> = {
  success: {
    icon: <FiCheckCircle size={14} />,
    className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },

  warning: {
    icon: <FiAlertTriangle size={14} />,
    className: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },

  danger: {
    icon: <FiXCircle size={14} />,
    className: "bg-red-500/10 text-red-500 border-red-500/20",
  },

  info: {
    icon: <FiInfo size={14} />,
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },

  default: {
    icon: null,
    className:
      "bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/10",
  },
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const style = styles[variant];

  return (
    <motion.span
      whileHover={{
        scale: 1.05,
      }}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1.5
        text-sm
        font-medium
        transition
        ${style.className}
      `}
    >
      {style.icon}

      {children}
    </motion.span>
  );
}
