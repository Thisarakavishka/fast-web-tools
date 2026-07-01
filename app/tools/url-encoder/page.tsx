"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import UrlEditor from "../../components/url/UrlEditor";
import UrlToolbar from "../../components/url/UrlToolbar";
import UrlResult from "../../components/url/UrlResult";
import UrlStatistics from "../../components/url/UrlStatistics";
import UrlFAQ from "../../components/url/UrlFAQ";

import {
  encodeText,
  decodeText,
  getUrlStatistics,
  pasteUrl,
  copyUrl,
  uploadUrl,
  downloadUrl,
} from "../../lib/url";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const output = useMemo(() => {
    return mode === "encode" ? encodeText(input) : decodeText(input);
  }, [input, mode]);

  const statistics = useMemo(() => {
    return getUrlStatistics(
      input,
      output,
      mode === "encode" ? "Encoded" : "Decoded",
    );
  }, [input, output, mode]);

  const handlePaste = async () => {
    setInput(await pasteUrl());
  };

  const handleCopy = async () => {
    await copyUrl(output);
  };

  const handleSwap = () => {
    setInput(output);
    setMode(mode === "encode" ? "decode" : "encode");
  };

  const handleUpload = async (file: File) => {
    setInput(await uploadUrl(file));
  };

  const handleDownload = () => {
    downloadUrl(output);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="URL Encoder / Decoder"
        description="Encode and decode URLs instantly in your browser. Safe, fast and completely private."
      />

      <UrlEditor
        input={input}
        mode={mode}
        onInputChange={setInput}
        onModeChange={setMode}
      />

      <UrlToolbar
        onPaste={handlePaste}
        onCopy={handleCopy}
        onSwap={handleSwap}
        onUpload={handleUpload}
        onDownload={handleDownload}
        onClear={handleClear}
      />

      <section className="mt-12">
        <UrlResult mode={mode} output={output} />
      </section>

      <section className="mt-12">
        <UrlStatistics
          inputLength={statistics.inputLength}
          outputLength={statistics.outputLength}
          difference={statistics.difference}
          operation={statistics.operation}
        />
      </section>

      <section className="mt-20">
        <UrlFAQ />
      </section>

      <section className="mt-20">
        <RelatedTools
          tools={[
            {
              title: "Base64 Encoder",
              description: "Encode and decode Base64 instantly.",
              href: "/tools/base64",
            },
            {
              title: "Hash Generator",
              description: "Generate MD5 and SHA hashes.",
              href: "/tools/hash-generator",
            },
            {
              title: "JSON Formatter",
              description: "Beautify and validate JSON.",
              href: "/tools/json-formatter",
            },
          ]}
        />
      </section>
    </ToolLayout>
  );
}
