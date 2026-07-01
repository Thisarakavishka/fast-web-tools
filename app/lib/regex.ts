export interface RegexResult {
  matches: string[];
  matchCount: number;
  groups: number;
  executionTime: number;
}

export function testRegex(
  pattern: string,
  flags: string,
  text: string,
): RegexResult {
  const start = performance.now();

  try {
    const regex = new RegExp(pattern, flags);

    const matches = [...text.matchAll(regex)].map((match) => match[0]);

    const executionTime = performance.now() - start;

    const groups =
      matches.length > 0
        ? [...text.matchAll(regex)][0]?.length
          ? [...text.matchAll(regex)][0].length - 1
          : 0
        : 0;

    return {
      matches,
      matchCount: matches.length,
      groups,
      executionTime,
    };
  } catch {
    return {
      matches: [],
      matchCount: 0,
      groups: 0,
      executionTime: 0,
    };
  }
}

export async function pasteRegex() {
  return navigator.clipboard.readText();
}

export async function copyRegex(text: string) {
  await navigator.clipboard.writeText(text);
}

export async function uploadRegex(file: File) {
  return await file.text();
}

export function downloadRegex(text: string) {
  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "regex-result.txt";

  a.click();

  URL.revokeObjectURL(url);
}
