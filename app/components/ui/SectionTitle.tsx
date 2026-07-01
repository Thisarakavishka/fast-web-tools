"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

export default function SectionTitle({
  title,
  description,
  align = "left",
  size = "lg",
}: SectionTitleProps) {
  const titleSize = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  }[size];

  const descriptionSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const spacing = {
    sm: "mb-4",
    md: "mb-6",
    lg: "mb-8",
  }[size];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`${align === "center" ? "text-center" : ""} ${spacing}`}
    >
      <h2
        className={`
          ${titleSize}
          font-bold
          tracking-tight
          text-black
          dark:text-white
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            mt-2
            ${descriptionSize}
            text-neutral-500
            leading-relaxed
            ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}
          `}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
