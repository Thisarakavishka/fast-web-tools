"use client";

import { useMemo } from "react";

import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import CopyButton from "./CopyButton";
import EmptyState from "./EmptyState";

import { FiCode } from "react-icons/fi";

interface CodeViewerProps {
  title: string;
  description?: string;
  code: string;
  language?: string;
  copyText?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function CodeViewer({
  title,
  description,
  code,
  language = "Text",
  copyText,
  emptyTitle = "Nothing to display",
  emptyDescription = "Provide input to see the output.",
}: CodeViewerProps) {
  const lines = useMemo(() => {
    if (!code) return [];

    return code.split("\n");
  }, [code]);

  return (
    <GlassCard>
      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
        <SectionTitle title={title} description={description} />

        <CopyButton text={copyText ?? code} disabled={!code} />
      </div>

      {/* Empty */}

      {!code ? (
        <EmptyState
          icon={<FiCode />}
          title={emptyTitle}
          description={emptyDescription}
        />
      ) : (
        <div className="overflow-auto">
          {/* Top Bar */}

          <div
            className="
            flex
            items-center
            justify-between
            px-6
            py-3
            border-b
            border-black/10
            dark:border-white/10
            bg-black/[0.02]
            dark:bg-white/[0.03]
            "
          >
            <span className="text-sm font-medium text-neutral-500">
              {language}
            </span>

            <span className="text-sm text-neutral-500">
              {lines.length} lines
            </span>
          </div>

          {/* Code */}

          <div className="flex min-h-[320px]">
            {/* Line Numbers */}

            <div
              className="
              shrink-0
              border-r
              border-black/10
              dark:border-white/10
              bg-black/[0.02]
              dark:bg-white/[0.02]
              px-4
              py-6
              text-right
              text-sm
              text-neutral-400
              select-none
              "
            >
              {lines.map((_, index) => (
                <div key={index} className="h-7 leading-7">
                  {index + 1}
                </div>
              ))}
            </div>

            {/* Code */}

            <pre
              className="
              flex-1
              overflow-auto
              p-6
              font-mono
              text-sm
              leading-7
              whitespace-pre
              "
            >
              <code>{code}</code>
            </pre>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
