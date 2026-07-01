export interface Base64Stats {
  inputCharacters: number;
  outputCharacters: number;
  inputBytes: number;
  outputBytes: number;
  isEncoded: boolean;
}

export function encodeBase64(text: string): string {
  if (!text) return "";

  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    throw new Error("Unable to encode text.");
  }
}

export function decodeBase64(text: string): string {
  if (!text) return "";

  try {
    return decodeURIComponent(escape(atob(text)));
  } catch {
    throw new Error("Invalid Base64 string.");
  }
}

export function isBase64(text: string): boolean {
  if (!text.trim()) return false;

  try {
    return btoa(atob(text)) === text.replace(/\s/g, "");
  } catch {
    return false;
  }
}

export function getBase64Stats(input: string, output: string): Base64Stats {
  return {
    inputCharacters: input.length,

    outputCharacters: output.length,

    inputBytes: new Blob([input]).size,

    outputBytes: new Blob([output]).size,

    isEncoded: isBase64(input),
  };
}

export function clearBase64() {
  return {
    input: "",
    output: "",
  };
}

export async function pasteBase64() {
  return navigator.clipboard.readText();
}

export async function copyBase64(text: string) {
  await navigator.clipboard.writeText(text);
}

export async function uploadBase64File(file: File): Promise<string> {
  return file.text();
}

export function downloadBase64(text: string, filename = "base64.txt") {
  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = filename;

  document.body.appendChild(link);

  link.click();

  link.remove();

  URL.revokeObjectURL(url);
}

export function swapValues(input: string, output: string) {
  return {
    input: output,
    output: input,
  };
}
