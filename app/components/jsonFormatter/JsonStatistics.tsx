"use client";

import { motion } from "framer-motion";
import {
  FiHash,
  FiCode,
  FiLayers,
  FiPackage,
  FiFileText,
  FiDatabase,
  FiBox,
  FiGitBranch,
} from "react-icons/fi";

interface Props {
  json: string;
}

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

function getDepth(obj: any): number {
  if (obj === null || typeof obj !== "object") return 0;

  const children = Object.values(obj);

  if (children.length === 0) return 1;

  return 1 + Math.max(...children.map(getDepth));
}

function countKeys(obj: any): number {
  if (obj === null || typeof obj !== "object") return 0;

  let count = Object.keys(obj).length;

  Object.values(obj).forEach((value) => {
    count += countKeys(value);
  });

  return count;
}

function countArrays(obj: any): number {
  if (obj === null || typeof obj !== "object") return 0;

  let total = Array.isArray(obj) ? 1 : 0;

  Object.values(obj).forEach((value) => {
    total += countArrays(value);
  });

  return total;
}

function countObjects(obj: any): number {
  if (obj === null || typeof obj !== "object") return 0;

  let total = Array.isArray(obj) ? 0 : 1;

  Object.values(obj).forEach((value) => {
    total += countObjects(value);
  });

  return total;
}

export default function JsonStatistics({ json }: Props) {
  let stats: StatCard[] = [];

  try {
    const parsed = JSON.parse(json);

    const bytes = new Blob([json]).size;

    stats = [
      {
        label: "Characters",
        value: json.length.toLocaleString(),
        icon: <FiHash />,
      },
      {
        label: "Lines",
        value: json.split("\n").length,
        icon: <FiFileText />,
      },
      {
        label: "Keys",
        value: countKeys(parsed),
        icon: <FiCode />,
      },
      {
        label: "Objects",
        value: countObjects(parsed),
        icon: <FiPackage />,
      },
      {
        label: "Arrays",
        value: countArrays(parsed),
        icon: <FiLayers />,
      },
      {
        label: "Depth",
        value: getDepth(parsed),
        icon: <FiGitBranch />,
      },
      {
        label: "Bytes",
        value: bytes.toLocaleString(),
        icon: <FiDatabase />,
      },
      {
        label: "Type",
        value: Array.isArray(parsed) ? "Array" : "Object",
        icon: <FiBox />,
      },
    ];
  } catch {
    stats = [
      {
        label: "Characters",
        value: json.length,
        icon: <FiHash />,
      },
      {
        label: "Lines",
        value: json.split("\n").length,
        icon: <FiFileText />,
      },
    ];
  }

  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">JSON Statistics</h2>

        <p className="mt-2 text-neutral-500">
          Structure analysis updates automatically.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
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
            "
          >
            <div
              className="
              mb-5

              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-black/5
              dark:bg-white/10

              text-lg
              "
            >
              {stat.icon}
            </div>

            <p className="text-sm text-neutral-500">{stat.label}</p>

            <motion.h3
              key={String(stat.value)}
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

              text-3xl

              font-bold

              tracking-tight
              "
            >
              {stat.value}
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
        ))}
      </div>
    </section>
  );
}
