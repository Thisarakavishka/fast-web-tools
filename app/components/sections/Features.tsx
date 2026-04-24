"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { FiZap, FiLock, FiCpu } from "react-icons/fi";

export default function Features() {
  return (
    <section className="relative py-24 border-t border-black/10 dark:border-white/10 overflow-hidden">
      {/* GRID BACKGROUND (SECTION ONLY) */}
      <div
        className="absolute inset-0 -z-10 opacity-30
        [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* OPTIONAL VIGNETTE (DEPTH) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.15))] dark:bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6))]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold mb-16 text-center"
        >
          Why FastWebTools?
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* BIG FEATURE */}
          <motion.div
            variants={fadeUp}
            className="p-10 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-black/10 dark:bg-white/10 flex items-center justify-center mb-6">
              <FiZap size={24} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Lightning Fast Tools
            </h3>

            <p className="text-gray-500 max-w-md">
              All tools run instantly in your browser. No waiting, no loading
              screens, just pure speed.
            </p>

            <span className="text-sm text-gray-400 mt-8 block">
              Built for performance
            </span>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center mb-4">
                <FiLock size={20} />
              </div>

              <h3 className="font-semibold text-lg">Privacy First</h3>

              <p className="text-gray-500 mt-2 text-sm">
                Your data never leaves your device. No tracking, ever.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center mb-4">
                <FiCpu size={20} />
              </div>

              <h3 className="font-semibold text-lg">No Signup Needed</h3>

              <p className="text-gray-500 mt-2 text-sm">
                No accounts. No friction. Just open and use instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
