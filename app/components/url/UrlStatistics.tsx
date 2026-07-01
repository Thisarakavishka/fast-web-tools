"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import InfoRow from "../ui/InfoRow";
import Badge from "../ui/Badge";

interface Props {
  inputLength: number;
  outputLength: number;
  difference: number;
  operation: "Encoded" | "Decoded";
}

export default function UrlStatistics({
  inputLength,
  outputLength,
  difference,
  operation,
}: Props) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="URL Statistics"
        description="Information about the conversion."
      />

      <div className="mt-8">
        <InfoRow
          label="Operation"
          value={<Badge variant="info">{operation}</Badge>}
        />

        <InfoRow label="Input Length" value={inputLength.toLocaleString()} />

        <InfoRow label="Output Length" value={outputLength.toLocaleString()} />

        <InfoRow
          label="Difference"
          value={`${difference >= 0 ? "+" : ""}${difference}`}
        />

        <InfoRow
          border={false}
          label="Status"
          value={
            <Badge variant={outputLength > 0 ? "success" : "warning"}>
              {outputLength > 0 ? "Ready" : "Waiting"}
            </Badge>
          }
        />
      </div>
    </GlassCard>
  );
}
