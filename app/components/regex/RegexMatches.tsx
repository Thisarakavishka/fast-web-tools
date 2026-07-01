"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import EmptyState from "../ui/EmptyState";

import { FiSearch } from "react-icons/fi";

interface RegexMatchesProps {
  matches: string[];
}

export default function RegexMatches({ matches }: RegexMatchesProps) {
  if (matches.length === 0) {
    return (
      <GlassCard className="p-8">
        <EmptyState
          icon={<FiSearch />}
          title="No Matches"
          description="Enter a regular expression and some text to start testing."
        />
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8">
      <SectionTitle
        size="sm"
        title="Matches"
        description={`${matches.length} match${
          matches.length === 1 ? "" : "es"
        } found.`}
      />

      <div className="mt-6 space-y-4">
        {matches.map((match, index) => (
          <div
            key={`${match}-${index}`}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-black/[0.02]
              dark:bg-white/[0.03]
              px-5
              py-4
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-blue-500/10
                text-sm
                font-semibold
                text-blue-500
              "
            >
              {index + 1}
            </div>

            <code
              className="
                flex-1
                overflow-auto
                font-mono
                text-sm
                text-orange-500
                break-all
              "
            >
              {match}
            </code>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
