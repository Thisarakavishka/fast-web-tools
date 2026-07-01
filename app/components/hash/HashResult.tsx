"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import CopyButton from "../ui/CopyButton";
import EmptyState from "../ui/EmptyState";

import { FiLock } from "react-icons/fi";

interface Props {
  md5: string;
  sha1: string;
  sha256: string;
  sha384: string;
  sha512: string;
}

export default function HashResult({
  md5,
  sha1,
  sha256,
  sha384,
  sha512,
}: Props) {
  const hashes = [
    {
      name: "MD5",
      value: md5,
    },
    {
      name: "SHA-1",
      value: sha1,
    },
    {
      name: "SHA-256",
      value: sha256,
    },
    {
      name: "SHA-384",
      value: sha384,
    },
    {
      name: "SHA-512",
      value: sha512,
    },
  ];

  if (!md5 && !sha1 && !sha256 && !sha384 && !sha512) {
    return (
      <GlassCard className="p-8">
        <EmptyState
          icon={<FiLock />}
          title="No Hash Generated"
          description="Enter some text to generate secure hashes."
        />
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="Generated Hashes"
        description="All supported hash algorithms are calculated instantly."
      />

      <div className="mt-8 space-y-5">
        {hashes.map((hash) => (
          <div
            key={hash.name}
            className="
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-black/[0.02]
              dark:bg-white/[0.03]
              p-5
            "
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{hash.name}</h3>

              <CopyButton
                text={hash.value}
                label="Copy"
                disabled={!hash.value}
              />
            </div>

            <code
              className="
                block
                break-all
                rounded-xl
                bg-black/5
                dark:bg-white/5
                p-4
                font-mono
                text-sm
                text-orange-500
              "
            >
              {hash.value}
            </code>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
