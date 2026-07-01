"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import RegexEditor from "../../components/regex/RegexEditor";
import RegexToolbar from "../../components/regex/RegexToolbar";
import RegexMatches from "../../components/regex/RegexMatches";
import RegexStatistics from "../../components/regex/RegexStatistics";
import RegexFAQ from "../../components/regex/RegexFAQ";

import {
  testRegex,
  pasteRegex,
  copyRegex,
  uploadRegex,
  downloadRegex,
} from "../../lib/regex";

export default function RegexPage() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const result = useMemo(() => {
    return testRegex(pattern, flags, text);
  }, [pattern, flags, text]);

  const handlePaste = async () => {
    const clipboard = await pasteRegex();
    setText(clipboard);
  };

  const handleCopy = async () => {
    await copyRegex(text);
  };

  const handleUpload = async (file: File) => {
    const content = await uploadRegex(file);
    setText(content);
  };

  const handleDownload = () => {
    downloadRegex(text);
  };

  const handleClear = () => {
    setPattern("");
    setFlags("g");
    setText("");
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="Regex Tester"
        description="Test JavaScript regular expressions instantly in your browser. Match text, validate patterns, inspect results and experiment with regex flags without sending data to any server."
      />

      {/* Editor */}

      <RegexEditor
        pattern={pattern}
        flags={flags}
        text={text}
        onPatternChange={setPattern}
        onFlagsChange={setFlags}
        onTextChange={setText}
      />

      {/* Toolbar */}

      <RegexToolbar
        onPaste={handlePaste}
        onCopy={handleCopy}
        onUpload={handleUpload}
        onDownload={handleDownload}
        onClear={handleClear}
      />

      {/* Matches */}

      <section className="mt-12">
        <RegexMatches matches={result.matches} />
      </section>

      {/* Statistics */}

      <section className="mt-12">
        <RegexStatistics
          pattern={pattern}
          flags={flags}
          matchCount={result.matchCount}
          groups={result.groups}
          executionTime={result.executionTime}
        />
      </section>

      {/* FAQ */}

      <section className="mt-20">
        <RegexFAQ />
      </section>

      {/* Related */}

      <section className="mt-20">
        <RelatedTools
          tools={[
            {
              title: "JWT Decoder",
              description:
                "Decode JWT tokens locally without sending them to any server.",
              href: "/tools/jwt",
            },
            {
              title: "JSON Formatter",
              description: "Beautify, validate and minify JSON instantly.",
              href: "/tools/json-formatter",
            },
            {
              title: "Base64 Encoder",
              description: "Encode and decode Base64 strings securely.",
              href: "/tools/base64",
            },
          ]}
        />
      </section>
    </ToolLayout>
  );
}
