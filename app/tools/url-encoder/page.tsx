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
import ToolSchema from "../../components/seo/ToolSchema";

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
    <>
      <ToolSchema
        name="URL Encoder / Decoder"
        description="Encode and decode URLs instantly in your browser. Convert text into URL-safe format or decode percent-encoded URLs securely without uploading your data."
        path="/tools/url-encoder"
        faqItems={[
          {
            question: "What is URL encoding?",
            answer:
              "URL encoding converts special characters into a format that can be safely transmitted in URLs by replacing them with percent-encoded values.",
          },
          {
            question:
              "What is the difference between encodeURI and encodeURIComponent?",
            answer:
              "encodeURI is intended for complete URLs and leaves reserved URL characters unchanged, while encodeURIComponent encodes almost every special character and is intended for individual URL components such as query parameter values.",
          },
          {
            question: "When should I encode a URL?",
            answer:
              "You should encode URLs when sending query parameters, form values, API requests or any text containing spaces or special characters.",
          },
          {
            question: "Is this URL Encoder secure?",
            answer:
              "Yes. All encoding and decoding happens locally inside your browser. Your data is never uploaded to any server.",
          },
          {
            question: "Can I decode any encoded URL?",
            answer:
              "Yes. As long as the text is a valid percent-encoded URL or URL component, this tool can decode it back into readable text.",
          },
        ]}
      />

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
    </>
  );
}
