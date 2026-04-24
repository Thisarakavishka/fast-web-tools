"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold"
      >
        Start using tools instantly
      </motion.h2>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/tools"
          className="inline-block mt-8 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold"
        >
          Browse Tools
        </Link>
      </motion.div>
    </section>
  );
}
