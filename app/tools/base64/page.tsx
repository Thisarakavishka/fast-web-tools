"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import Base64Editor from "../../components/base64/Base64Editor";
import Base64Toolbar from "../../components/base64/Base64Toolbar";
import Base64Viewer from "../../components/base64/Base64Viewer";
import Base64Statistics from "../../components/base64/Base64Statistics";
import Base64FAQ from "../../components/base64/Base64FAQ";

import {
  encodeBase64,
  decodeBase64,
  getBase64Stats,
  pasteBase64,
  copyBase64,
  uploadBase64File,
  downloadBase64,
  swapValues,
} from "../../lib/base64";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const stats = useMemo(() => getBase64Stats(input, output), [input, output]);

  const handleEncode = () => {
    try {
      setOutput(encodeBase64(input));
      setError("");
    } catch (e: any) {
      setOutput("");
      setError(e.message);
    }
  };

  const handleDecode = () => {
    try {
      setOutput(decodeBase64(input));
      setError("");
    } catch (e: any) {
      setOutput("");
      setError(e.message);
    }
  };

  const handlePaste = async () => {
    try {
      setInput(await pasteBase64());
    } catch {
      setError("Unable to access clipboard.");
    }
  };

  const handleCopy = async () => {
    try {
      await copyBase64(output || input);
    } catch {
      setError("Unable to copy.");
    }
  };

  const handleSwap = () => {
    const values = swapValues(input, output);
    setInput(values.input);
    setOutput(values.output);
    setError("");
  };

  const handleUpload = async (file: File) => {
    try {
      const text = await uploadBase64File(file);
      setInput(text);
      setOutput("");
      setError("");
    } catch {
      setError("Unable to read file.");
    }
  };

  const handleDownload = () => {
    downloadBase64(output || input);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="Base64 Encoder & Decoder"
        description="Encode and decode Base64 instantly. Everything runs locally in your browser for maximum privacy."
      />

      <div className="grid xl:grid-cols-2 gap-8">
        <Base64Editor
          value={input}
          onChange={setInput}
          onPaste={handlePaste}
          onClear={handleClear}
        />

        <Base64Viewer value={output} error={error} onCopy={handleCopy} />
      </div>

      <Base64Toolbar
        onEncode={handleEncode}
        onDecode={handleDecode}
        onPaste={handlePaste}
        onCopy={handleCopy}
        onSwap={handleSwap}
        onUpload={handleUpload}
        onDownload={handleDownload}
      />

      <Base64Statistics
        input={input}
        output={output}
        isEncoded={stats.isEncoded}
      />

      <Base64FAQ />

      <RelatedTools
        tools={[
          {
            title: "JSON Formatter",
            description: "Format, validate and minify JSON.",
            href: "/tools/json-formatter",
          },
          {
            title: "JWT Decoder",
            description: "Decode JWT tokens securely.",
            href: "/tools/jwt",
          },
          {
            title: "Word Counter",
            description: "Count words and analyze text instantly.",
            href: "/tools/word-counter",
          },
        ]}
      />
    </ToolLayout>
  );
}
