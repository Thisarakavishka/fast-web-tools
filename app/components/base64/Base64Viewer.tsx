"use client";

import {
  FiCheckCircle,
  FiCopy,
  FiFileText,
  FiAlertCircle,
} from "react-icons/fi";

interface Props {
  value: string;
  error?: string;
  onCopy: () => void;
}

export default function Base64Viewer({ value, error, onCopy }: Props) {
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
            <h3 className="font-semibold">Output</h3>

            <p className="text-xs text-neutral-500">Encoded / Decoded Result</p>
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

      {/* Error */}

      {error && (
        <div
          className="
          flex
          items-center
          gap-3
          bg-red-500/10
          border-b
          border-red-500/20
          px-6
          py-4
          text-red-500
          "
        >
          <FiAlertCircle />

          <span>{error}</span>
        </div>
      )}

      {/* Empty */}

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
            <FiFileText size={32} />
          </div>

          <h3 className="text-xl font-semibold">Nothing to display</h3>

          <p className="mt-3 max-w-sm text-neutral-500">
            Encode or decode your text to see the result here instantly.
          </p>
        </div>
      )}

      {/* Viewer */}

      {value && (
        <div className="flex h-[500px] overflow-auto">
          {/* Line Numbers */}

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

          {/* Content */}

          <pre
            className="
            flex-1
            overflow-auto
            p-6
            whitespace-pre-wrap
            break-words
            font-mono
            text-[15px]
            leading-7
            "
          >
            <code>{value}</code>
          </pre>
        </div>
      )}

      {/* Footer */}

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

          {error ? "Invalid Base64" : "Ready"}
        </div>

        <div>{value.length.toLocaleString()} characters</div>
      </div>
    </div>
  );
}
