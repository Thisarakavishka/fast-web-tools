"use client";

import CodeViewer from "../ui/CodeViewer";

interface Props {
  mode: "encode" | "decode";
  output: string;
}

export default function UrlResult({ mode, output }: Props) {
  return (
    <CodeViewer
      title={mode === "encode" ? "Encoded URL" : "Decoded URL"}
      description={
        mode === "encode"
          ? "Your encoded URL is ready."
          : "Your decoded URL is ready."
      }
      language="Text"
      code={output}
      copyText={output}
      emptyTitle="Nothing to display"
      emptyDescription={
        mode === "encode"
          ? "Enter text to generate an encoded URL."
          : "Enter an encoded URL to decode."
      }
    />
  );
}
