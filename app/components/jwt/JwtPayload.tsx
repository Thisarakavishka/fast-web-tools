"use client";

import CodeViewer from "../ui/CodeViewer";

interface JwtPayloadProps {
  payload: Record<string, any> | null;
  error?: string;
  onCopy: () => void;
}

export default function JwtPayload({
  payload,
  error,
  onCopy,
}: JwtPayloadProps) {
  const formatted = payload ? JSON.stringify(payload, null, 2) : "";

  return (
    <CodeViewer
      title="JWT Payload"
      description="Decoded payload claims."
      language="JSON"
      code={formatted}
      copyText={formatted}
      emptyTitle="No JWT Payload"
      emptyDescription={
        error ?? "Paste a valid JWT token to inspect its decoded payload."
      }
    />
  );
}
