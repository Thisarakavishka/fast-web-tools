"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tools = [
  "Word Counter",
  "JSON Formatter",
  "Password Generator",
  "Text Case Converter",
  "URL Encoder",
  "Base64 Tool",
];

export default function ToolsPreview() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="tools" className="py-24 px-6 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Popular Tools
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* SLIDER */}
        <motion.div
          className="flex gap-6"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* DUPLICATE FOR LOOP */}
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="min-w-[250px] p-6 border border-black/10 dark:border-white/10 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{tool}</h3>
              <p className="text-sm text-gray-500 mt-2">Use instantly</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
