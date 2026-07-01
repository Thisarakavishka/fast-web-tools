"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import InfoRow from "../ui/InfoRow";
import Badge from "../ui/Badge";

interface Props {
  count: number;
  version: string;
  characters: number;
  duplicates: number;
  generationTime: number;
}

export default function UuidStatistics({
  count,
  version,
  characters,
  duplicates,
  generationTime,
}: Props) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="UUID Statistics"
        description="Information about the generated UUIDs."
      />

      <div className="mt-8">
        <InfoRow
          label="Generated"
          value={<Badge variant="success">{count}</Badge>}
        />

        <InfoRow
          label="UUID Version"
          value={<Badge variant="info">v{version}</Badge>}
        />

        <InfoRow label="Characters" value={characters.toLocaleString()} />

        <InfoRow
          label="Duplicates"
          value={
            <Badge variant={duplicates === 0 ? "success" : "warning"}>
              {duplicates}
            </Badge>
          }
        />

        <InfoRow
          border={false}
          label="Generation Time"
          value={`${generationTime.toFixed(2)} ms`}
        />
      </div>
    </GlassCard>
  );
}
