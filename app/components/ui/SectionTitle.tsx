"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  description,
  align = "left",
}: SectionTitleProps) {
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
        duration: 0.4,
      }}
      className={align === "center" ? "text-center mb-8" : "mb-8"}
    >
      <h2
        className="
        text-3xl
        md:text-4xl
        font-bold
        tracking-tight
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-3
          max-w-2xl
          text-neutral-500
          leading-7
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
