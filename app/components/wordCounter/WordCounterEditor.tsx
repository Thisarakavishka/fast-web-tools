"use client";

import { FiFileText } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function WordCounterEditor({ value, onChange }: Props) {
  return (
    <div
      className="
      overflow-hidden

      rounded-[30px]

      border
      border-black/10
      dark:border-white/10

      bg-white/70
      dark:bg-white/[0.04]

      backdrop-blur-xl

      shadow-[0_15px_60px_rgba(0,0,0,.05)]
      dark:shadow-[0_15px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between

        border-b
        border-black/10
        dark:border-white/10

        px-6
        py-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-black/5
            dark:bg-white/10
            "
          >
            <FiFileText size={18} />
          </div>

          <div>
            <h3 className="font-semibold">Text Editor</h3>

            <p className="text-xs text-neutral-500">
              Type or paste your text below
            </p>
          </div>
        </div>

        <span className="text-xs text-neutral-500">
          {value.length.toLocaleString()} Characters
        </span>
      </div>

      {/* Editor */}

      <textarea
        spellCheck={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="
        h-[480px]
        w-full

        resize-y

        bg-transparent

        p-6

        font-mono

        text-[15px]

        leading-8

        outline-none

        placeholder:text-neutral-400
        "
      />
    </div>
  );
}
