"use client";

import { useState } from "react";
import ToolLayout from "../../components/tool/ToolLayout";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    setOutput(btoa(input));
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 ❌");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return <ToolLayout children={undefined}></ToolLayout>;
}
