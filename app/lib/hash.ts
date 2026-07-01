import SparkMD5 from "spark-md5";

export interface HashResult {
  md5: string;
  sha1: string;
  sha256: string;
  sha384: string;
  sha512: string;
}

export interface HashStatistics {
  characters: number;
  bytes: number;
  lines: number;
  hashes: number;
}

async function digest(
  algorithm: AlgorithmIdentifier,
  text: string,
): Promise<string> {
  const encoder = new TextEncoder();

  const data = encoder.encode(text);

  const buffer = await crypto.subtle.digest(algorithm, data);

  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function generateHashes(text: string): Promise<HashResult> {
  if (!text.trim()) {
    return {
      md5: "",
      sha1: "",
      sha256: "",
      sha384: "",
      sha512: "",
    };
  }

  const md5 = SparkMD5.hash(text);

  const [sha1, sha256, sha384, sha512] = await Promise.all([
    digest("SHA-1", text),
    digest("SHA-256", text),
    digest("SHA-384", text),
    digest("SHA-512", text),
  ]);

  return {
    md5,
    sha1,
    sha256,
    sha384,
    sha512,
  };
}

export function getHashStatistics(text: string): HashStatistics {
  return {
    characters: text.length,
    bytes: new TextEncoder().encode(text).length,
    lines: text.length === 0 ? 0 : text.split("\n").length,
    hashes: 5,
  };
}

export async function pasteHash(): Promise<string> {
  return navigator.clipboard.readText();
}

export async function copyHash(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export async function uploadHash(file: File): Promise<string> {
  return await file.text();
}

export function downloadHashes(hashes: HashResult): void {
  const content = `MD5
${hashes.md5}

SHA-1
${hashes.sha1}

SHA-256
${hashes.sha256}

SHA-384
${hashes.sha384}

SHA-512
${hashes.sha512}
`;

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "hashes.txt";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
