"use client";

import { useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import UuidGenerator from "../../components/uuid/UuidGenerator";
import UuidToolbar from "../../components/uuid/UuidToolbar";
import UuidList from "../../components/uuid/UuidList";
import UuidStatistics from "../../components/uuid/UuidStatistics";
import UuidFAQ from "../../components/uuid/UuidFAQ";

import {
  generateUUIDs,
  getUUIDStatistics,
  copyUUID,
  downloadUUIDs,
} from "../../lib/uuid";

export default function UUIDPage() {
  const [amount, setAmount] = useState(10);
  const [uuids, setUUIDs] = useState<string[]>([]);
  const [generationTime, setGenerationTime] = useState(0);

  const statistics = useMemo(() => {
    return getUUIDStatistics(uuids, generationTime);
  }, [uuids, generationTime]);

  const handleGenerate = () => {
    const start = performance.now();

    const generated = generateUUIDs(amount);

    const end = performance.now();

    setUUIDs(generated);
    setGenerationTime(end - start);
  };

  const handleCopyAll = async () => {
    await copyUUID(uuids.join("\n"));
  };

  const handleDownload = () => {
    downloadUUIDs(uuids);
  };

  const handleClear = () => {
    setUUIDs([]);
    setGenerationTime(0);
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="UUID Generator"
        description="Generate secure Version 4 UUIDs instantly in your browser. Create one or hundreds of UUIDs for databases, APIs, distributed systems and applications."
      />

      {/* Generator */}

      <UuidGenerator
        amount={amount}
        onAmountChange={setAmount}
        onGenerate={handleGenerate}
      />

      {/* Toolbar */}

      <UuidToolbar
        onGenerate={handleGenerate}
        onCopyAll={handleCopyAll}
        onDownload={handleDownload}
        onClear={handleClear}
      />

      {/* UUID List */}

      <section className="mt-12">
        <UuidList uuids={uuids} />
      </section>

      {/* Statistics */}

      <section className="mt-12">
        <UuidStatistics
          count={statistics.count}
          version={statistics.version}
          characters={statistics.characters}
          duplicates={statistics.duplicates}
          generationTime={statistics.generationTime}
        />
      </section>

      {/* FAQ */}

      <section className="mt-20">
        <UuidFAQ />
      </section>

      {/* Related Tools */}

      <section className="mt-20">
        <RelatedTools
          tools={[
            {
              title: "Regex Tester",
              description: "Test JavaScript regular expressions instantly.",
              href: "/tools/regex",
            },
            {
              title: "JWT Decoder",
              description: "Decode JWT tokens securely in your browser.",
              href: "/tools/jwt",
            },
            {
              title: "Hash Generator",
              description: "Generate MD5, SHA-1 and SHA-256 hashes.",
              href: "/tools/hash-generator",
            },
          ]}
        />
      </section>
    </ToolLayout>
  );
}
