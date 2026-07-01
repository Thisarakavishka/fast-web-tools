"use client";

import { useEffect, useRef } from "react";
import { FiClipboard, FiKey, FiTrash2 } from "react-icons/fi";
import GlassCard from "../ui/GlassCard";

interface JwtEditorProps {
  value: string;
  onChange: (value: string) => void;
  onPaste: () => void;
  onClear: () => void;
}

export default function JwtEditor({
  value,
  onChange,
  onPaste,
  onClear,
}: JwtEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLPreElement>(null);

  const parts = value.split(".");
  const header = parts[0] ?? "";
  const payload = parts[1] ?? "";
  const signature = parts[2] ?? "";

  useEffect(() => {
    const textarea = textareaRef.current;
    const highlight = highlightRef.current;

    if (!textarea || !highlight) return;

    const syncScroll = () => {
      highlight.scrollTop = textarea.scrollTop;
      highlight.scrollLeft = textarea.scrollLeft;
    };

    textarea.addEventListener("scroll", syncScroll);
    return () => textarea.removeEventListener("scroll", syncScroll);
  }, []);

  return (
    <GlassCard className="overflow-hidden" hover={false}>
      <div className="flex flex-col gap-4 border-b border-black/10 dark:border-white/10 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10">
            <FiKey size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">JWT Token</h2>
            <p className="mt-1 text-neutral-500">
              Paste a JSON Web Token to inspect it instantly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onPaste}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-4 py-2.5 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FiClipboard />
            Paste
          </button>

          <button
            onClick={onClear}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-4 py-2.5 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FiTrash2 />
            Clear
          </button>
        </div>
      </div>

      <div className="relative flex h-[380px] overflow-hidden">
        <div className="w-14 shrink-0 border-r border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] py-10 text-center font-mono text-sm text-neutral-500 select-none">
          {Array.from({ length: Math.max(value.split("\n").length, 1) }).map((_, i) => (
            <div key={i} className="leading-10">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="relative flex-1">
          {!value && (
            <div className="pointer-events-none absolute left-10 top-10 z-10 font-mono text-lg text-neutral-500">
              Paste JWT here...
            </div>
          )}

          <pre
            ref={highlightRef}
            className="pointer-events-none absolute inset-0 overflow-auto whitespace-pre-wrap break-all p-10 font-mono text-[17px] leading-10 select-none"
          >
            <span className="text-orange-400">{header}</span>
            {payload && (
              <>
                <span className="text-pink-500">.</span>
                <span className="text-violet-400">{payload}</span>
              </>
            )}
            {signature && (
              <>
                <span className="text-pink-500">.</span>
                <span className="text-emerald-400">{signature}</span>
              </>
            )}
          </pre>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            className="absolute inset-0 h-full w-full resize-none overflow-auto bg-transparent p-10 font-mono text-[17px] leading-10 text-transparent caret-white outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-8 py-4 text-sm text-neutral-500">
        <span>Characters: {value.length.toLocaleString()}</span>
        <span>JWT Parts: {parts.filter(Boolean).length}/3</span>
      </div>
    </GlassCard>
  );
}
