"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-black/10 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="
        w-full
        py-6
        flex
        items-center
        justify-between
        text-left
        group
        "
      >
        <span className="text-lg font-semibold">{title}</span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="text-neutral-500 group-hover:text-black dark:group-hover:text-white"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 leading-8 text-neutral-500">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
