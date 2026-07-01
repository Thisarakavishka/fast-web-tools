"use client";

import ToolCard from "../tool/ToolCard";

interface RegexEditorProps {
  pattern: string;
  text: string;
  flags: string;
  onPatternChange: (value: string) => void;
  onTextChange: (value: string) => void;
  onFlagsChange: (value: string) => void;
}

export default function RegexEditor({
  pattern,
  text,
  flags,
  onPatternChange,
  onTextChange,
  onFlagsChange,
}: RegexEditorProps) {
  return (
    <ToolCard>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-semibold">Regular Expression</label>

          <input
            value={pattern}
            onChange={(e) => onPatternChange(e.target.value)}
            placeholder="Example: hello|world"
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              px-5
              py-4
              font-mono
              outline-none
              focus:border-black
              dark:focus:border-white
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Regex Flags</label>

          <input
            value={flags}
            onChange={(e) => onFlagsChange(e.target.value)}
            placeholder="gim"
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              px-5
              py-4
              font-mono
              outline-none
              focus:border-black
              dark:focus:border-white
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Test Text</label>

          <textarea
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Paste text to test..."
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
      </div>
    </ToolCard>
  );
}
