"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function StatisticsGrid({ children }: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        mt-8

        grid

        grid-cols-2

        gap-5

        md:grid-cols-3

        xl:grid-cols-4
      "
    >
      {children}
    </motion.section>
  );
}
