export interface UrlStatistics {
  inputLength: number;
  outputLength: number;
  difference: number;
  operation: "Encoded" | "Decoded";
}

export function encodeText(text: string): string {
  try {
    return encodeURIComponent(text);
  } catch {
    return "";
  }
}

export function decodeText(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return "";
  }
}

export function getUrlStatistics(
  input: string,
  output: string,
  operation: "Encoded" | "Decoded",
): UrlStatistics {
  return {
    inputLength: input.length,
    outputLength: output.length,
    difference: output.length - input.length,
    operation,
  };
}

export async function pasteUrl(): Promise<string> {
  return navigator.clipboard.readText();
}

export async function copyUrl(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export async function uploadUrl(file: File): Promise<string> {
  return await file.text();
}

export function downloadUrl(text: string): void {
  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "url-output.txt";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
