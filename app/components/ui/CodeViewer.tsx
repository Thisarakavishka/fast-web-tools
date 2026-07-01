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
    <GlassCard hover={false}>
      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-5
          border-b
          border-black/10
          dark:border-white/10
          p-6
          md:flex-row
          md:items-start
          md:justify-between
        "
      >
        <div className="flex-1">
          <SectionTitle
            size="sm"
            title={title}
            description={description}
          />
        </div>

        <CopyButton
          text={copyText ?? code}
          disabled={!code}
        />
      </div>

      {/* Empty State */}

      {!code ? (
        <EmptyState
          icon={<FiCode />}
          title={emptyTitle}
          description={emptyDescription}
        />
      ) : (
        <>
          {/* Toolbar */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-black/10
              dark:border-white/10
              bg-black/[0.03]
              dark:bg-white/[0.03]
              px-6
              py-3
            "
          >
            <span className="text-sm font-medium text-neutral-500">
              {language}
            </span>

            <span className="text-sm text-neutral-500">
              {lines.length} {lines.length === 1 ? "line" : "lines"}
            </span>
          </div>

          {/* Code */}

          <div className="flex min-h-[320px] overflow-hidden">

            {/* Line Numbers */}

            <div
              className="
                w-14
                shrink-0
                border-r
                border-black/10
                dark:border-white/10
                bg-black/[0.02]
                dark:bg-white/[0.02]
                py-6
                text-center
                text-sm
                text-neutral-500
                select-none
              "
            >
              {lines.map((_, index) => (
                <div
                  key={index}
                  className="h-8 leading-8"
                >
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
                text-[15px]
                leading-8
                whitespace-pre
                text-neutral-900
                dark:text-neutral-200
              "
            >
              <code>{code}</code>
            </pre>
          </div>
        </>
      )}
    </GlassCard>
  );
}