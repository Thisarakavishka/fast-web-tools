"use client";

import { useState } from "react";
import ToolLayout from "../../components/ToolLayout";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");

  const decodeJWT = () => {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(payload));
      setDecoded(JSON.stringify(decodedPayload, null, 2));
    } catch {
      setDecoded("Invalid JWT ❌");
    }
  };

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JSON Web Tokens instantly (client-side)."
    >
      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste JWT token..."
        className="w-full h-40 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur mb-6"
      />

      <div className="flex justify-center mb-6">
        <button onClick={decodeJWT} className="btn-primary">
          Decode
        </button>
      </div>

      <textarea
        value={decoded}
        readOnly
        placeholder="Decoded payload..."
        className="w-full h-64 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur font-mono"
      />
    </ToolLayout>
  );
}
