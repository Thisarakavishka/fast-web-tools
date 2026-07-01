export interface UUIDStatistics {
  count: number;
  version: string;
  characters: number;
  duplicates: number;
  generationTime: number;
}

export function generateUUID(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

export function generateUUIDs(amount: number): string[] {
  const start = performance.now();

  const uuids = Array.from({ length: amount }, () => generateUUID());

  const end = performance.now();

  return uuids;
}

export function getUUIDStatistics(
  uuids: string[],
  executionTime: number,
): UUIDStatistics {
  const unique = new Set(uuids);

  return {
    count: uuids.length,
    version: "4",
    characters: uuids.join("").length,
    duplicates: uuids.length - unique.size,
    generationTime: executionTime,
  };
}

export async function copyUUID(text: string) {
  await navigator.clipboard.writeText(text);
}

export async function pasteUUID() {
  return navigator.clipboard.readText();
}

export function downloadUUIDs(uuids: string[]) {
  const blob = new Blob([uuids.join("\n")], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "uuids.txt";

  a.click();

  URL.revokeObjectURL(url);
}
