"use client";

import { useState } from "react";
import ToolLayout from "../../components/ToolLayout";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setError("Invalid JSON ❌");
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch {
      setError("Invalid JSON ❌");
      setOutput("");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Format, validate and beautify JSON instantly."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* INPUT */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste JSON..."
          className="h-96 p-4 rounded-xl border border-black/10 dark:border-white/10 
          bg-white/70 dark:bg-white/5 backdrop-blur font-mono text-sm outline-none"
        />

        {/* OUTPUT */}
        <textarea
          value={output}
          readOnly
          placeholder="Formatted result..."
          className="h-96 p-4 rounded-xl border border-black/10 dark:border-white/10 
          bg-white/70 dark:bg-white/5 backdrop-blur font-mono text-sm outline-none"
        />
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button onClick={formatJson} className="btn-primary">
          Format
        </button>
        <button onClick={minifyJson} className="btn-outline">
          Minify
        </button>
        <button onClick={copyOutput} className="btn-outline">
          Copy
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </ToolLayout>
  );
}
