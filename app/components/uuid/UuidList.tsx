"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import CopyButton from "../ui/CopyButton";
import EmptyState from "../ui/EmptyState";

import { FiHash } from "react-icons/fi";

interface Props {
  uuids: string[];
}

export default function UuidList({ uuids }: Props) {
  if (uuids.length === 0) {
    return (
      <GlassCard className="p-8">
        <EmptyState
          icon={<FiHash />}
          title="No UUIDs Generated"
          description="Click Generate to create secure Version 4 UUIDs."
        />
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="Generated UUIDs"
        description={`${uuids.length} UUID${
          uuids.length === 1 ? "" : "s"
        } generated.`}
      />

      <div className="mt-8 space-y-4">
        {uuids.map((uuid, index) => (
          <div
            key={uuid}
            className="
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-black/[0.02]
              dark:bg-white/[0.03]
              p-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-500/10
                  font-semibold
                  text-blue-500
                "
              >
                {index + 1}
              </div>

              <code
                className="
                  break-all
                  font-mono
                  text-sm
                  md:text-base
                  text-orange-500
                "
              >
                {uuid}
              </code>
            </div>

            <CopyButton text={uuid} label="Copy" />
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
