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
  {
    key: "words",
    label: "Words",
    icon: <FiType />,
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "characters",
    label: "Characters",
    icon: <FiHash />,
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "charactersWithoutSpaces",
    label: "Without Spaces",
    icon: <FiHash />,
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "paragraphs",
    label: "Paragraphs",
    icon: <FiFileText />,
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "sentences",
    label: "Sentences",
    icon: <FiAlignLeft />,
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "readingTime",
    label: "Reading Time",
    icon: <FiClock />,
    suffix: " min",
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "speakingTime",
    label: "Speaking Time",
    icon: <FiMessageSquare />,
    suffix: " min",
    color: "bg-black/5 dark:bg-white/10",
  },
  {
    key: "lines",
    label: "Lines",
    icon: <FiLayers />,
    color: "bg-black/5 dark:bg-white/10",
  },
];

export default function WordCounterStats(props: Props) {
  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Live Statistics</h2>

        <p className="mt-2 text-neutral-500">
          Statistics update instantly while you type.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const value = props[stat.key as keyof Props];

          return (
            <motion.div
              key={stat.key}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl
                border
                border-black/10
                dark:border-white/10

                bg-white/70
                dark:bg-white/[0.04]

                backdrop-blur-xl

                p-6

                shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                transition-all
              "
            >
              <div
                className={`
                  ${stat.color}

                  mb-5

                  flex

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-2xl

                  text-lg
                `}
              >
                {stat.icon}
              </div>

              <p className="text-sm text-neutral-500">{stat.label}</p>

              <motion.h3
                key={String(value)}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  mt-3

                  text-4xl

                  font-bold

                  tracking-tight
                "
              >
                {value}
                {stat.suffix}
              </motion.h3>

              <div className="mt-5 h-1 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="h-full rounded-full bg-black dark:bg-white"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <FiBookOpen className="text-xl" />

          <h3 className="text-lg font-semibold">Quick Summary</h3>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4">
            <p className="text-sm text-neutral-500">Estimated Reading Time</p>

            <p className="mt-2 text-xl font-semibold">
              {props.readingTime} minute
              {props.readingTime !== 1 && "s"}
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4">
            <p className="text-sm text-neutral-500">Estimated Speaking Time</p>

            <p className="mt-2 text-xl font-semibold">
              {props.speakingTime} minute
              {props.speakingTime !== 1 && "s"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
