// WordCounerStats.tsx
"use client";

import { motion } from "framer-motion";
import {
  FiType,
  FiHash,
  FiFileText,
  FiAlignLeft,
  FiClock,
  FiBookOpen,
  FiMessageSquare,
  FiLayers,
} from "react-icons/fi";

interface Props {
  words: number;
  characters: number;
  charactersWithoutSpaces: number;
  paragraphs: number;
  sentences: number;
  readingTime: number;
  speakingTime: number;
  lines: number;
}

const stats = [
  { key: "words", label: "Words", icon: <FiType /> },
  { key: "characters", label: "Characters", icon: <FiHash /> },
  { key: "charactersWithoutSpaces", label: "Without Spaces", icon: <FiHash /> },
  { key: "paragraphs", label: "Paragraphs", icon: <FiFileText /> },
  { key: "sentences", label: "Sentences", icon: <FiAlignLeft /> },
  {
    key: "readingTime",
    label: "Reading Time",
    icon: <FiClock />,
    suffix: " min",
  },
  {
    key: "speakingTime",
    label: "Speaking Time",
    icon: <FiMessageSquare />,
    suffix: " min",
  },
  { key: "lines", label: "Lines", icon: <FiLayers /> },
];

export default function WordCounterStats(props: Props) {
  return (
    <section className="mt-8">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Live Statistics
        </h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Statistics update instantly while you type.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const value = props[stat.key as keyof Props];
          return (
            <motion.div
              key={stat.key}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl p-5 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 text-base">
                {stat.icon}
              </div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                {stat.label}
              </p>
              <motion.h3
                key={String(value)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-3xl font-bold tracking-tight"
              >
                {value}
                {stat.suffix}
              </motion.h3>
              <div className="mt-4 h-0.5 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-black dark:bg-white"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <FiBookOpen className="text-lg" />
          <h3 className="text-base font-semibold">Quick Summary</h3>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-black/5 dark:bg-white/5 p-3.5">
            <p className="text-sm text-neutral-500">Estimated Reading Time</p>
            <p className="mt-1 text-lg font-semibold">
              {props.readingTime} minute{props.readingTime !== 1 && "s"}
            </p>
          </div>
          <div className="rounded-xl bg-black/5 dark:bg-white/5 p-3.5">
            <p className="text-sm text-neutral-500">Estimated Speaking Time</p>
            <p className="mt-1 text-lg font-semibold">
              {props.speakingTime} minute{props.speakingTime !== 1 && "s"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
