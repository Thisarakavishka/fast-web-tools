"use client";

import { useMemo } from "react";

import Accordion from "./Accordion";

interface Props {
  text: string;
}

export default function AdvancedAnalysis({ text }: Props) {
  const analysis = useMemo(() => {
    const words = text.toLowerCase().match(/[a-z0-9']+/g) ?? [];

    const frequency = new Map<string, number>();

    words.forEach((word) => {
      if (word.length <= 2) return;

      frequency.set(word, (frequency.get(word) ?? 0) + 1);
    });

    const topWords = [...frequency.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const longestWord = words.sort((a, b) => b.length - a.length)[0] ?? "-";

    const uniqueWords = new Set(words).size;

    const averageWordLength = words.length
      ? (
          words.reduce((sum, word) => sum + word.length, 0) / words.length
        ).toFixed(1)
      : "0";

    return {
      topWords,
      longestWord,
      uniqueWords,
      averageWordLength,
    };
  }, [text]);

  return (
    <Accordion title="Advanced Analysis">
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-3">Most Used Words</h3>

          {analysis.topWords.length ? (
            <div className="space-y-3">
              {analysis.topWords.map(([word, count]) => (
                <div key={word} className="flex items-center gap-3">
                  <div className="w-28">{word}</div>

                  <div className="flex-1 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-black dark:bg-white"
                      style={{
                        width: `${count * 12}%`,
                      }}
                    />
                  </div>

                  <div className="w-10 text-right text-sm text-gray-500">
                    {count}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Start typing to see analysis.</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <p className="text-gray-500 text-sm">Longest Word</p>

            <p className="mt-2 font-semibold break-all">
              {analysis.longestWord}
            </p>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <p className="text-gray-500 text-sm">Unique Words</p>

            <p className="mt-2 font-semibold">{analysis.uniqueWords}</p>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <p className="text-gray-500 text-sm">Average Word Length</p>

            <p className="mt-2 font-semibold">{analysis.averageWordLength}</p>
          </div>
        </div>
      </div>
    </Accordion>
  );
}
