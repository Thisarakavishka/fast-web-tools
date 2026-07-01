"use client";

import CodeViewer from "../ui/CodeViewer";

interface JwtHeaderProps {
  header: Record<string, any> | null;
  error?: string;
  onCopy: () => void;
}

export default function JwtHeader({ header, error, onCopy }: JwtHeaderProps) {
  const formatted = header ? JSON.stringify(header, null, 2) : "";

  return (
    <CodeViewer
      title="JWT Header"
      description="Decoded header information."
      language="JSON"
      code={formatted}
      copyText={formatted}
      emptyTitle="No JWT Header"
      emptyDescription={
        error ?? "Paste a valid JWT token to inspect its decoded header."
      }
    />
  );
}
