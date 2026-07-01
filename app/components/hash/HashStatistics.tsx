"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import InfoRow from "../ui/InfoRow";
import Badge from "../ui/Badge";

interface Props {
  characters: number;
  bytes: number;
  lines: number;
  hashes: number;
}

export default function HashStatistics({
  characters,
  bytes,
  lines,
  hashes,
}: Props) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="Hash Statistics"
        description="Information about the current input and generated hashes."
      />

      <div className="mt-8">
        <InfoRow label="Characters" value={characters.toLocaleString()} />

        <InfoRow label="Bytes (UTF-8)" value={bytes.toLocaleString()} />

        <InfoRow label="Lines" value={lines} />

        <InfoRow
          label="Hash Algorithms"
          value={<Badge variant="info">{hashes}</Badge>}
        />

        <InfoRow
          border={false}
          label="Status"
          value={
            <Badge variant={characters > 0 ? "success" : "warning"}>
              {characters > 0 ? "Ready" : "Waiting"}
            </Badge>
          }
        />
      </div>
    </GlassCard>
  );
}
