"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen pt-24 px-6 relative">
      {/* BACKGROUND GRID */}

      <div
        className="absolute inset-0 -z-10 opacity-30
        [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10">All Tools</h1>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm outline-none"
        />
      </div>

      {/* FILTER PILLS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TOOLS GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool, i) => (
            <Link key={i} href={tool.path}>
              <div className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl">
                {/* ICON PLACEHOLDER */}
                <div className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 mb-4 flex items-center justify-center text-sm">
                  ⚙️
                </div>

                <h2 className="text-lg font-semibold group-hover:underline">
                  {tool.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Use instantly with no signup.
                </p>

                {/* CATEGORY */}
                <span className="text-xs mt-4 inline-block text-gray-400">
                  {tool.category}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No tools found.
          </p>
        )}
      </div>
    </div>
  );
}
