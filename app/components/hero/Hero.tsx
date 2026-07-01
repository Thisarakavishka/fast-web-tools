"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("tools")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* 🌌 SMOOTH INFINITE GRID FLOW */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* LAYER 1 */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(white_1px,transparent_1px)]
          bg-[size:28px_28px]
          opacity-20
          animate-gridFlow"
        />

        {/* LAYER 2 (OFFSET FOR LOOP) */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(white_1px,transparent_1px)]
          bg-[size:28px_28px]
          opacity-20
          animate-gridFlow"
          style={{ transform: "translateY(-40px)" }}
        />
      </div>

      {/* ✨ SOFT GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* 🎯 VIGNETTE */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8))]" />

      {/* CONTENT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">
          FAST WEB TOOLS
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Simple Tools. <br />
          <span className="gradient-text">Powerful Results.</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Free. Fast. No signup. No tracking.
        </p>

        <button
          onClick={scrollToNext}
          className="mt-10 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
        >
          Explore Tools
        </button>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-6 cursor-pointer text-sm opacity-70"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
