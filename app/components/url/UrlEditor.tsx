"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

interface Props {
  input: string;
  mode: "encode" | "decode";
  onInputChange: (value: string) => void;
  onModeChange: (mode: "encode" | "decode") => void;
}

export default function UrlEditor({
  input,
  mode,
  onInputChange,
  onModeChange,
}: Props) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="URL Encoder / Decoder"
        description="Encode or decode URLs securely in your browser."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <button
          onClick={() => onModeChange("encode")}
          className={`rounded-2xl border px-6 py-4 font-semibold transition ${
            mode === "encode"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
          }`}
        >
          Encode URL
        </button>

        <button
          onClick={() => onModeChange("decode")}
          className={`rounded-2xl border px-6 py-4 font-semibold transition ${
            mode === "decode"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
          }`}
        >
          Decode URL
        </button>
      </div>

      <div className="mt-8">
        <label className="mb-3 block font-semibold">
          {mode === "encode" ? "Text to Encode" : "URL to Decode"}
        </label>

        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          spellCheck={false}
          placeholder={
            mode === "encode" ? "Enter text or URL..." : "Paste encoded URL..."
          }
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
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-4">
        <p className="text-sm text-neutral-500">
          Everything runs locally in your browser. Your data is never uploaded
          to any server.
        </p>
      </div>
    </GlassCard>
  );
}
