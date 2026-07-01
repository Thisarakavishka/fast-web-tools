"use client";

import { useMemo } from "react";
import { FiBarChart2, FiHash, FiType, FiTrendingUp } from "react-icons/fi";

import Accordion from "../tool/Accordion";

interface Props {
  text: string;
}

export default function WordCounterAdvanced({ text }: Props) {
  const analysis = useMemo(() => {
    const words = text.toLowerCase().match(/[a-zA-ZÀ-ÿ0-9']+/g) ?? [];

    const frequency = new Map<string, number>();

    words.forEach((word) => {
      if (word.length <= 2) return;

      frequency.set(word, (frequency.get(word) ?? 0) + 1);
    });

    const sortedWords = [...frequency.entries()].sort((a, b) => b[1] - a[1]);

    const topWords = sortedWords.slice(0, 10);

    const longestWord =
      [...words].sort((a, b) => b.length - a.length)[0] ?? "-";

    const shortestWord =
      [...words].sort((a, b) => a.length - b.length)[0] ?? "-";

    const uniqueWords = new Set(words).size;

    const averageWordLength = words.length
      ? (
          words.reduce((sum, word) => sum + word.length, 0) / words.length
        ).toFixed(1)
      : "0";

    const lexical =
      words.length > 0 ? ((uniqueWords / words.length) * 100).toFixed(1) : "0";

    return {
      topWords,
      longestWord,
      shortestWord,
      uniqueWords,
      averageWordLength,
      lexical,
      totalWords: words.length,
    };
  }, [text]);

  return (
    <section className="mt-20">
      <Accordion title="Advanced Text Analysis">
        <div className="space-y-10">
          {/* TOP WORDS */}

          <div>
            <div className="flex items-center gap-2 mb-5">
              <FiTrendingUp />

              <h3 className="font-semibold text-lg">Most Used Words</h3>
            </div>

            {analysis.topWords.length ? (
              <div className="space-y-4">
                {analysis.topWords.map(([word, count]) => {
                  const percentage = (count / analysis.totalWords) * 100;

                  return (
                    <div key={word} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{word}</span>

                        <span className="text-neutral-500">
                          {count} ({percentage.toFixed(1)}%)
                        </span>
                      </div>

                      <div className="h-2 rounded-full overflow-hidden bg-black/5 dark:bg-white/10">
                        <div
                          className="h-full rounded-full bg-black dark:bg-white transition-all duration-700"
                          style={{
                            width: `${Math.min(percentage * 4, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-black/10 dark:border-white/10 p-8 text-center text-neutral-500">
                Start typing to view keyword analysis.
              </div>
            )}
          </div>

          {/* ANALYTICS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-2 mb-4">
                <FiType />

                <span className="text-sm text-neutral-500">Longest Word</span>
              </div>

              <p className="font-semibold break-all">{analysis.longestWord}</p>
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-2 mb-4">
                <FiHash />

                <span className="text-sm text-neutral-500">Shortest Word</span>
              </div>

              <p className="font-semibold break-all">{analysis.shortestWord}</p>
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-2 mb-4">
                <FiBarChart2 />

                <span className="text-sm text-neutral-500">Unique Words</span>
              </div>

              <p className="text-2xl font-bold">{analysis.uniqueWords}</p>
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-2 mb-4">
                <FiTrendingUp />

                <span className="text-sm text-neutral-500">
                  Avg. Word Length
                </span>
              </div>

              <p className="text-2xl font-bold">{analysis.averageWordLength}</p>
            </div>
          </div>

          {/* LEXICAL */}

          <div className="rounded-3xl border border-black/10 dark:border-white/10 p-6">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Lexical Diversity</span>

              <span className="font-semibold">{analysis.lexical}%</span>
            </div>

            <div className="h-3 rounded-full overflow-hidden bg-black/5 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-black dark:bg-white transition-all duration-700"
                style={{
                  width: `${analysis.lexical}%`,
                }}
              />
            </div>

            <p className="mt-4 text-sm text-neutral-500 leading-7">
              Lexical diversity measures how varied your vocabulary is. Higher
              percentages generally indicate richer vocabulary and less
              repetition.
            </p>
          </div>
        </div>
      </Accordion>
    </section>
  );
}
