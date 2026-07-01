"use client";

import { motion } from "framer-motion";

import {
  FiType,
  FiDatabase,
  FiFileText,
  FiCheckCircle,
  FiCpu,
  FiActivity,
} from "react-icons/fi";

interface Props {
  input: string;
  output: string;
  isEncoded: boolean;
}

export default function Base64Statistics({ input, output, isEncoded }: Props) {
  const stats = [
    {
      label: "Input Characters",
      value: input.length.toLocaleString(),
      icon: <FiType />,
    },
    {
      label: "Output Characters",
      value: output.length.toLocaleString(),
      icon: <FiFileText />,
    },
    {
      label: "Input Bytes",
      value: new Blob([input]).size.toLocaleString(),
      icon: <FiDatabase />,
    },
    {
      label: "Output Bytes",
      value: new Blob([output]).size.toLocaleString(),
      icon: <FiDatabase />,
    },
    {
      label: "Detected",
      value: isEncoded ? "Base64" : "Plain Text",
      icon: <FiCheckCircle />,
    },
    {
      label: "Conversion",
      value: input && output ? (isEncoded ? "Decoded" : "Encoded") : "-",
      icon: <FiCpu />,
    },
    {
      label: "Compression",
      value:
        input && output
          ? `${((output.length / Math.max(input.length, 1)) * 100).toFixed(0)}%`
          : "-",
      icon: <FiActivity />,
    },
    {
      label: "Status",
      value: output ? "Ready" : "Waiting",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Conversion Statistics</h2>

        <p className="mt-2 text-neutral-500">
          Information about your Base64 conversion.
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
            shadow-[0_12px_40px_rgba(0,0,0,.05)]
            dark:shadow-[0_12px_40px_rgba(0,0,0,.35)]
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
              break-words
              "
            >
              {stat.value}
            </motion.h3>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
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
