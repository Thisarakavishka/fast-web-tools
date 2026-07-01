"use client";

import { useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import JsonEditor from "../../components/jsonFormatter/JsonEditor";
import JsonToolbar from "../../components/jsonFormatter/JsonToolbar";
import JsonViewer from "../../components/jsonFormatter/JsonViewer";
import JsonStatistics from "../../components/jsonFormatter/JsonStatistics";
import JsonFAQ from "../../components/jsonFormatter/JsonFAQ";
import ToolSchema from "../../components/seo/ToolSchema";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const safeParse = () => JSON.parse(input);

  const format = () => {
    try {
      const result = JSON.stringify(safeParse(), null, 2);
      setOutput(result);
      setError("");
    } catch {
      setError("Invalid JSON.");
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const result = JSON.stringify(safeParse());
      setOutput(result);
      setError("");
    } catch {
      setError("Invalid JSON.");
      setOutput("");
    }
  };

  const validate = () => {
    try {
      safeParse();
      setError("");
      if (!output) setOutput(input);
    } catch {
      setError("Invalid JSON.");
    }
  };

  const sortObject = (obj: any): any => {
    if (Array.isArray(obj)) return obj.map(sortObject);
    if (obj && typeof obj === "object") {
      return Object.keys(obj)
        .sort()
        .reduce((acc: any, key) => {
          acc[key] = sortObject(obj[key]);
          return acc;
        }, {});
    }
    return obj;
  };

  const sortKeys = () => {
    try {
      const sorted = sortObject(safeParse());
      setOutput(JSON.stringify(sorted, null, 2));
      setError("");
    } catch {
      setError("Invalid JSON.");
      setOutput("");
    }
  };

  const paste = async () => {
    try {
      setInput(await navigator.clipboard.readText());
    } catch {}
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output || input);
    } catch {}
  };

  const upload = async (file: File) => {
    setInput(await file.text());
    setOutput("");
    setError("");
  };

  const download = () => {
    const content = output || input;
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <ToolSchema
        name="JSON Formatter & Validator"
        description="Format, validate, minify, beautify and sort JSON instantly in your browser. All processing happens locally without uploading your data."
        path="/tools/json-formatter"
        faqItems={[
          {
            question: "What is JSON?",
            answer:
              "JSON (JavaScript Object Notation) is a lightweight data-interchange format widely used for APIs, configuration files and web applications.",
          },
          {
            question: "Can this tool validate JSON?",
            answer:
              "Yes. The formatter checks whether your JSON is valid and displays an error if the syntax is incorrect.",
          },
          {
            question:
              "What is the difference between formatting and minifying JSON?",
            answer:
              "Formatting (beautifying) adds indentation and line breaks to improve readability, while minifying removes unnecessary whitespace to reduce file size.",
          },
          {
            question: "Is my JSON uploaded to a server?",
            answer:
              "No. All formatting, validation and minification happen locally in your browser. Your data never leaves your device.",
          },
          {
            question: "Can I sort JSON object keys?",
            answer:
              "Yes. This tool can alphabetically sort JSON object keys, making large JSON documents easier to read and compare.",
          },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="JSON Formatter & Validator"
          description="Format, validate, minify and analyze JSON instantly. Everything runs locally in your browser."
        />

        <div className="grid xl:grid-cols-2 gap-8">
          <JsonEditor
            value={input}
            onChange={setInput}
            onPaste={paste}
            onClear={() => {
              setInput("");
              setOutput("");
              setError("");
            }}
          />

          <JsonViewer value={output} error={error} onCopy={copy} />
        </div>

        <JsonToolbar
          onFormat={format}
          onMinify={minify}
          onValidate={validate}
          onSortKeys={sortKeys}
          onPaste={paste}
          onCopy={copy}
          onUpload={upload}
          onDownload={download}
        />

        <JsonStatistics json={output || input} />

        <JsonFAQ />

        <RelatedTools
          tools={[
            {
              title: "Word Counter",
              description: "Count words, characters and reading time.",
              href: "/tools/word-counter",
            },
            {
              title: "JWT Decoder",
              description: "Decode JWT tokens instantly.",
              href: "/tools/jwt",
            },
            {
              title: "Base64 Encoder",
              description: "Encode and decode Base64 text.",
              href: "/tools/base64",
            },
          ]}
        />
      </ToolLayout>
    </>
  );
}
