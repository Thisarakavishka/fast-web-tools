"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  { name: "Word Counter", path: "/tools/word-counter", category: "Text" },
  { name: "JSON Formatter", path: "/tools/json-formatter", category: "Dev" },
  {
    name: "Image Compressor",
    path: "/tools/image-compressor",
    category: "Image",
  },
  {
    name: "Password Generator",
    path: "/tools/password-generator",
    category: "Security",
  },
  { name: "URL Encoder", path: "/tools/url-encoder", category: "Dev" },
];

const categories = ["All", "Text", "Dev", "Image", "Security"];

/* ANIMATION VARIANTS */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || tool.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-6 relative"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 opacity-30
        [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.2))] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]" />
      </div>

      {/* TITLE */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl font-bold text-center mb-10"
      >
        All Tools
      </motion.h1>

      {/* SEARCH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-xl mx-auto mb-8"
      >
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm outline-none"
        />
      </motion.div>

      {/* FILTER PILLS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* TOOLS GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={tool.path}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm cursor-pointer transition-all hover:shadow-2xl"
                  >
                    {/* ICON */}
                    <div className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 mb-4 flex items-center justify-center text-sm">
                      ⚙️
                    </div>

                    <h2 className="text-lg font-semibold group-hover:underline">
                      {tool.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                      Use instantly with no signup.
                    </p>

                    <span className="text-xs mt-4 inline-block text-gray-400">
                      {tool.category}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center col-span-full text-gray-500"
            >
              No tools found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
