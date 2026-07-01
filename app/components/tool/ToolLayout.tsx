"use client";

import { motion } from "framer-motion";

interface ToolLayoutProps {
  children: React.ReactNode;
}

export default function ToolLayout({ children }: ToolLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24 pb-24">
      {/* Grid Background */}
      <div
        className="
        absolute inset-0 -z-30
        opacity-30
        [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      {/* Glow */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-black/5 blur-[120px] dark:bg-white/5" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-[160px] dark:bg-white/5" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.08))] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.72))]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto w-full max-w-7xl px-6"
      >
        {children}
      </motion.div>
    </main>
  );
}
