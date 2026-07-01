export interface WordCounterStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
  averageWordLength: number;
  longestWord: string;
  uniqueWords: number;
  topWords: {
    word: string;
    count: number;
  }[];
}

export function getWordCounterStats(text: string): WordCounterStats {
  const trimmed = text.trim();

  const words =
    trimmed.length > 0 ? (trimmed.match(/[A-Za-zÀ-ÿ0-9']+/g) ?? []) : [];

  const wordCount = words.length;

  const characters = text.length;

  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const sentences = text.match(/[.!?]+/g)?.length ?? 0;

  const paragraphs = trimmed ? text.split(/\n+/).filter(Boolean).length : 0;

  const readingTime =
    wordCount === 0 ? 0 : Math.max(1, Math.ceil(wordCount / 200));

  const speakingTime =
    wordCount === 0 ? 0 : Math.max(1, Math.ceil(wordCount / 130));

  const averageWordLength =
    wordCount === 0
      ? 0
      : Number(
          (
            words.reduce((sum, word) => sum + word.length, 0) / wordCount
          ).toFixed(1),
        );

  const longestWord = words.sort((a, b) => b.length - a.length)[0] ?? "-";

  const frequency = new Map<string, number>();

  words.forEach((word) => {
    const normalized = word.toLowerCase();

    if (normalized.length <= 2) return;

    frequency.set(normalized, (frequency.get(normalized) ?? 0) + 1);
  });

  const topWords = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({
      word,
      count,
    }));

  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;

  return {
    words: wordCount,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime,
    speakingTime,
    averageWordLength,
    longestWord,
    uniqueWords,
    topWords,
  };
}

export function copyText(text: string) {
  return navigator.clipboard.writeText(text);
}

export async function pasteText() {
  return navigator.clipboard.readText();
}

export function clearText() {
  return "";
}
