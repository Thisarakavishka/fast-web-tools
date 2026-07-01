"use client";

import { useState } from "react";
import ToolLayout from "../../components/tool/ToolLayout";

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

  return <ToolLayout children={undefined}></ToolLayout>;
}
