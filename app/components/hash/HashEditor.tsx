"use client";

import ToolCard from "../tool/ToolCard";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function HashEditor({ value, onChange }: Props) {
  return (
    <ToolCard>
      <div>
        <label className="mb-3 block font-semibold">Text to Hash</label>

        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          placeholder="Enter or paste text here..."
          className="
            h-80
            w-full
            resize-none
            rounded-2xl
            border
            border-black/10
            dark:border-white/10
            bg-transparent
            p-5
            font-mono
            outline-none
            focus:border-black
            dark:focus:border-white
          "
        />

        <p className="mt-4 text-sm text-neutral-500">
          Hashes are generated locally in your browser. Your text never leaves
          your device.
        </p>
      </div>
    </ToolCard>
  );
}
