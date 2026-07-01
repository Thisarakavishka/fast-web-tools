"use client";

import { FiCheckCircle, FiCode, FiCopy, FiAlertCircle } from "react-icons/fi";

interface Props {
  value: string;
  error?: string;
  onCopy: () => void;
}

export default function JsonViewer({ value, error, onCopy }: Props) {
  const lines = value ? value.split("\n") : [];

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
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
      {/* HEADER */}

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
            <FiCode size={18} />
          </div>

          <div>
            <h3 className="font-semibold">Formatted Output</h3>

            <p className="text-xs text-neutral-500">Read-only JSON preview</p>
          </div>
        </div>

        <button
          onClick={onCopy}
          disabled={!value}
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-black/10
          dark:border-white/10
          px-4
          py-2
          text-sm
          transition
          hover:bg-black/5
          dark:hover:bg-white/10
          disabled:opacity-40
          disabled:cursor-not-allowed
          "
        >
          <FiCopy />
          Copy
        </button>
      </div>

      {/* ERROR */}

      {error && (
        <div
          className="
          flex
          items-center
          gap-3
          border-b
          border-red-500/20
          bg-red-500/10
          px-6
          py-4
          text-red-500
          "
        >
          <FiAlertCircle />

          <span>{error}</span>
        </div>
      )}

      {/* EMPTY */}

      {!value && !error && (
        <div
          className="
          flex
          h-[500px]
          flex-col
          items-center
          justify-center
          text-center
          "
        >
          <div
            className="
            mb-5
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-black/5
            dark:bg-white/10
            "
          >
            <FiCode size={32} />
          </div>

          <h3 className="text-xl font-semibold">No JSON Output</h3>

          <p className="mt-3 max-w-sm text-neutral-500">
            Format or validate your JSON to preview the output here.
          </p>
        </div>
      )}

      {/* VIEWER */}

      {value && (
        <div className="flex h-[500px] overflow-auto">
          {/* LINE NUMBERS */}

          <div
            className="
            w-14
            shrink-0
            border-r
            border-black/10
            dark:border-white/10
            bg-black/[0.03]
            dark:bg-white/[0.03]
            text-right
            text-sm
            text-neutral-400
            select-none
            "
          >
            {lines.map((_, index) => (
              <div key={index} className="h-7 pr-3 leading-7">
                {index + 1}
              </div>
            ))}
          </div>

          {/* CODE */}

          <pre
            className="
            flex-1
            overflow-auto
            p-6
            text-[15px]
            leading-7
            font-mono
            whitespace-pre-wrap
            break-words
            "
          >
            <code>{value}</code>
          </pre>
        </div>
      )}

      {/* FOOTER */}

      <div
        className="
        flex
        items-center
        justify-between
        border-t
        border-black/10
        dark:border-white/10
        px-6
        py-3
        text-sm
        text-neutral-500
        "
      >
        <div className="flex items-center gap-2">
          <FiCheckCircle />

          {error ? "Invalid JSON" : "Ready"}
        </div>

        <div>
          {lines.length} {lines.length === 1 ? "line" : "lines"}
        </div>
      </div>
    </div>
  );
}
