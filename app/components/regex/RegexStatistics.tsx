"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import InfoRow from "../ui/InfoRow";
import Badge from "../ui/Badge";

interface RegexStatisticsProps {
  pattern: string;
  flags: string;
  matchCount: number;
  groups: number;
  executionTime: number;
}

export default function RegexStatistics({
  pattern,
  flags,
  matchCount,
  groups,
  executionTime,
}: RegexStatisticsProps) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="Regex Statistics"
        description="Information about the executed regular expression."
      />

      <div className="mt-8">
        <InfoRow
          label="Pattern"
          value={
            pattern ? (
              <code className="font-mono text-orange-500">{pattern}</code>
            ) : (
              "-"
            )
          }
        />

        <InfoRow
          label="Flags"
          value={flags ? <Badge variant="info">{flags}</Badge> : "-"}
        />

        <InfoRow
          label="Matches"
          value={
            <Badge variant={matchCount > 0 ? "success" : "warning"}>
              {matchCount}
            </Badge>
          }
        />

        <InfoRow label="Capturing Groups" value={groups} />

        <InfoRow
          border={false}
          label="Execution Time"
          value={`${executionTime.toFixed(2)} ms`}
        />
      </div>
    </GlassCard>
  );
}
