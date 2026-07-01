"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";

import WordCounterEditor from "../../components/wordCounter/WordCounterEditor";
import WordCounterToolbar from "../../components/wordCounter/WordCounterToolbar";
import WordCounterStats from "../../components/wordCounter/WordCounterStats";
import WordCounterAdvanced from "../../components/wordCounter/WordCounterAdvanced";
import WordCounterFAQ from "../../components/wordCounter/WordCounterFAQ";

import RelatedTools from "../../components/tool/RelatedTools";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const statistics = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;

    const characters = text.length;

    const charactersWithoutSpaces = text.replace(/\s/g, "").length;

    const paragraphs = trimmed
      ? text.split(/\n+/).filter((p) => p.trim()).length
      : 0;

    const sentences = text.match(/[.!?]+/g)?.length ?? 0;

    const readingTime = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

    const speakingTime = words === 0 ? 0 : Math.max(1, Math.ceil(words / 130));

    const lines = text.length === 0 ? 0 : text.split("\n").length;

    return {
      words,
      characters,
      charactersWithoutSpaces,
      paragraphs,
      sentences,
      readingTime,
      speakingTime,
      lines,
    };
  }, [text]);

  const handlePaste = async () => {
    try {
      const clipboard = await navigator.clipboard.readText();

      setText(clipboard);
    } catch {
      alert("Unable to access clipboard.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      alert("Copied to clipboard.");
    } catch {
      alert("Unable to copy.");
    }
  };

  const handleClear = () => {
    setText("");
  };

  const handleUpload = async (file: File) => {
    const content = await file.text();

    setText(content);
  };

  const handleDownload = () => {
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "text.txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="Word Counter"
        description="Count words, characters, paragraphs, reading time, speaking time and analyze your writing instantly. Everything runs locally in your browser for maximum privacy."
      />

      {/* Editor */}

      <WordCounterEditor value={text} onChange={setText} />

      {/* Toolbar */}

      <WordCounterToolbar
        onPaste={handlePaste}
        onCopy={handleCopy}
        onClear={handleClear}
        onUpload={handleUpload}
        onDownload={handleDownload}
      />

      {/* Statistics */}

      <WordCounterStats
        words={statistics.words}
        characters={statistics.characters}
        charactersWithoutSpaces={statistics.charactersWithoutSpaces}
        paragraphs={statistics.paragraphs}
        sentences={statistics.sentences}
        readingTime={statistics.readingTime}
        speakingTime={statistics.speakingTime}
        lines={statistics.lines}
      />

      {/* Advanced */}

      <WordCounterAdvanced text={text} />

      {/* FAQ */}

      <WordCounterFAQ />

      {/* Related */}

      <RelatedTools
        tools={[
          {
            title: "JSON Formatter",
            description: "Beautify, validate and minify JSON instantly.",
            href: "/tools/json-formatter",
          },
          {
            title: "Base64 Encoder",
            description: "Encode and decode Base64 strings online.",
            href: "/tools/base64",
          },
          {
            title: "JWT Decoder",
            description: "Decode JWT tokens securely in your browser.",
            href: "/tools/jwt",
          },
        ]}
      />
    </ToolLayout>
  );
}
