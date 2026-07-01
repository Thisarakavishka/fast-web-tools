"use client";

import { FiKey, FiClipboard, FiTrash2 } from "react-icons/fi";

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
  const lines = Math.max(1, value.split("\n").length);

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
            <FiKey size={18} />
          </div>

          <div>
            <h3 className="font-semibold">JWT Token</h3>

            <p className="text-xs text-neutral-500">
              Paste your JSON Web Token below
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onPaste}
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
            "
          >
            <FiClipboard />
            Paste
          </button>

          <button
            onClick={onClear}
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
            hover:bg-red-500
            hover:text-white
            "
          >
            <FiTrash2 />
            Clear
          </button>
        </div>
      </div>

      {/* Editor */}

      <div className="flex h-[220px] overflow-hidden">
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
          {Array.from({ length: lines }).map((_, index) => (
            <div key={index} className="h-7 pr-3 leading-7">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Textarea */}

        <textarea
          value={value}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste JWT here...

Example:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
"
          className="
          h-full
          w-full
          resize-none
          bg-transparent
          p-6
          font-mono
          text-[14px]
          leading-7
          outline-none
          placeholder:text-neutral-400
          break-all
          "
        />
      </div>

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
        <span>Characters: {value.length.toLocaleString()}</span>

        <span>JWT Parts: {value ? value.split(".").length : 0}/3</span>
      </div>
    </div>
  );
}
