"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import InfoRow from "../ui/InfoRow";
import Badge from "../ui/Badge";

interface JwtStatisticsProps {
  algorithm: string;
  type: string;
  issuer: string;
  subject: string;
  audience: string;
  issuedAt: string;
  expiresAt: string;
  notBefore: string;
  expired: boolean;
  signature: boolean;
  tokenSize: number;
}

export default function JwtStatistics({
  algorithm,
  type,
  issuer,
  subject,
  audience,
  issuedAt,
  expiresAt,
  notBefore,
  expired,
  signature,
  tokenSize,
}: JwtStatisticsProps) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        title="Token Information"
        description="Decoded metadata extracted from the JSON Web Token."
      />

      <div className="mt-8">
        <InfoRow
          label="Algorithm"
          value={<Badge variant="info">{algorithm || "-"}</Badge>}
        />

        <InfoRow
          label="Token Type"
          value={<Badge variant="info">{type || "JWT"}</Badge>}
        />

        <InfoRow label="Issuer" value={issuer || "-"} />

        <InfoRow label="Subject" value={subject || "-"} />

        <InfoRow label="Audience" value={audience || "-"} />

        <InfoRow label="Issued At" value={issuedAt || "-"} />

        <InfoRow label="Expires" value={expiresAt || "-"} />

        <InfoRow label="Not Before" value={notBefore || "-"} />

        <InfoRow
          label="Status"
          value={
            expired ? (
              <Badge variant="danger">Expired</Badge>
            ) : (
              <Badge variant="success">Valid</Badge>
            )
          }
        />

        <InfoRow
          label="Signature"
          value={
            signature ? (
              <Badge variant="success">Present</Badge>
            ) : (
              <Badge variant="warning">Missing</Badge>
            )
          }
        />

        <InfoRow
          border={false}
          label="Token Size"
          value={`${tokenSize.toLocaleString()} characters`}
        />
      </div>
    </GlassCard>
  );
}
