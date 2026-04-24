"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";

export default function Features() {
  return (
    <section className="py-24 border-t border-black/10 dark:border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-12">
          Why FastWebTools?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {["⚡ Fast", "🔒 Private", "🚀 No Signup"].map((item) => (
            <motion.div key={item} variants={fadeUp}>
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-500 mt-2">
                Clean and efficient experience.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
