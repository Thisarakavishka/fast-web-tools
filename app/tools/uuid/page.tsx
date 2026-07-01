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
import ToolSchema from "../../components/seo/ToolSchema";

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
    <>
      <ToolSchema
        name="UUID Generator"
        description="Generate secure Version 4 UUIDs instantly in your browser. Create one or hundreds of universally unique identifiers (UUIDs) for databases, APIs, distributed systems and applications."
        path="/tools/uuid"
        faqItems={[
          {
            question: "What is a UUID?",
            answer:
              "A UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely identify information across systems without requiring a central authority.",
          },
          {
            question: "Which UUID version does this tool generate?",
            answer:
              "This tool generates Version 4 UUIDs (UUIDv4), which are randomly generated and commonly used in modern software applications.",
          },
          {
            question: "Can two generated UUIDs be the same?",
            answer:
              "The probability of generating duplicate UUIDv4 values is extremely small, making them suitable for most applications requiring unique identifiers.",
          },
          {
            question: "Is this UUID Generator secure?",
            answer:
              "Yes. UUIDs are generated locally in your browser using the Web Crypto API. No data is transmitted to any server.",
          },
          {
            question: "What are UUIDs used for?",
            answer:
              "UUIDs are commonly used as database primary keys, API identifiers, session IDs, distributed system identifiers and unique resource identifiers.",
          },
        ]}
      />

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
    </>
  );
}
