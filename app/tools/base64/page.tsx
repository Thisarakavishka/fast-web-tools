"use client";

import { useState } from "react";
import ToolLayout from "../../components/ToolLayout";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    setOutput(btoa(input));
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 ❌");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolLayout
      title="Base64 Encoder & Decoder"
      description="Encode or decode Base64 instantly."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
          className="h-80 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
        />

        <textarea
          value={output}
          readOnly
          placeholder="Result..."
          className="h-80 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
        />
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button onClick={encode} className="btn-primary">
          Encode
        </button>
        <button onClick={decode} className="btn-outline">
          Decode
        </button>
        <button onClick={copy} className="btn-outline">
          Copy
        </button>
      </div>
    </ToolLayout>
  );
}
