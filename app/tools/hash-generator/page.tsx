"use client";

import { useEffect, useMemo, useState } from "react";

import ToolLayout from "../../components/tool/ToolLayout";
import ToolHeader from "../../components/tool/ToolHeader";
import RelatedTools from "../../components/tool/RelatedTools";

import HashEditor from "../../components/hash/HashEditor";
import HashToolbar from "../../components/hash/HashToolbar";
import HashResult from "../../components/hash/HashResult";
import HashStatistics from "../../components/hash/HashStatistics";
import HashFAQ from "../../components/hash/HashFAQ";
import ToolSchema from "../../components/seo/ToolSchema";

import {
  HashResult as HashResultType,
  generateHashes,
  getHashStatistics,
  pasteHash,
  uploadHash,
  downloadHashes,
} from "../../lib/hash";

export default function HashGeneratorPage() {
  const [text, setText] = useState("");

  const [hashes, setHashes] = useState<HashResultType>({
    md5: "",
    sha1: "",
    sha256: "",
    sha384: "",
    sha512: "",
  });

  useEffect(() => {
    const generate = async () => {
      const result = await generateHashes(text);
      setHashes(result);
    };

    generate();
  }, [text]);

  const statistics = useMemo(() => {
    return getHashStatistics(text);
  }, [text]);

  const handlePaste = async () => {
    try {
      const value = await pasteHash();
      setText(value);
    } catch {
      alert("Unable to access clipboard.");
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const value = await uploadHash(file);
      setText(value);
    } catch {
      alert("Unable to read file.");
    }
  };

  const handleDownload = () => {
    downloadHashes(hashes);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <ToolSchema
        name="Hash Generator"
        description="Generate MD5, SHA-1, SHA-256, SHA-384 and SHA-512 hashes instantly in your browser. All processing happens locally for maximum privacy."
        path="/tools/hash-generator"
        faqItems={[
          {
            question: "What is a cryptographic hash?",
            answer:
              "A cryptographic hash is a one-way mathematical function that converts input data into a fixed-length string. The same input always produces the same output.",
          },
          {
            question: "Is hashing the same as encryption?",
            answer:
              "No. Encryption is reversible with a key, while hashing is designed to be one-way and cannot be reversed back into the original data.",
          },
          {
            question: "Which hash algorithm should I use?",
            answer:
              "For modern applications, SHA-256 or stronger algorithms such as SHA-384 and SHA-512 are recommended. MD5 and SHA-1 should only be used for legacy compatibility.",
          },
          {
            question: "Is this Hash Generator secure?",
            answer:
              "Yes. All hashes are generated locally in your browser using the Web Crypto API and SparkMD5. Your data never leaves your device.",
          },
          {
            question: "Can I hash passwords with this tool?",
            answer:
              "This tool is suitable for testing and verification. For storing passwords in production, use dedicated password hashing algorithms such as Argon2, bcrypt or scrypt.",
          },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="Hash Generator"
          description="Generate MD5, SHA-1, SHA-256, SHA-384 and SHA-512 hashes instantly in your browser. All processing happens locally for maximum privacy."
        />

        {/* Editor */}

        <HashEditor value={text} onChange={setText} />

        {/* Toolbar */}

        <HashToolbar
          onPaste={handlePaste}
          onDownload={handleDownload}
          onClear={handleClear}
        />

        {/* Results */}

        <section className="mt-12">
          <HashResult
            md5={hashes.md5}
            sha1={hashes.sha1}
            sha256={hashes.sha256}
            sha384={hashes.sha384}
            sha512={hashes.sha512}
          />
        </section>

        {/* Statistics */}

        <section className="mt-12">
          <HashStatistics
            characters={statistics.characters}
            bytes={statistics.bytes}
            lines={statistics.lines}
            hashes={statistics.hashes}
          />
        </section>

        {/* FAQ */}

        <section className="mt-20">
          <HashFAQ />
        </section>

        {/* Related Tools */}

        <section className="mt-20">
          <RelatedTools
            tools={[
              {
                title: "UUID Generator",
                description: "Generate secure Version 4 UUIDs instantly.",
                href: "/tools/uuid",
              },
              {
                title: "Base64 Encoder",
                description: "Encode and decode Base64 strings securely.",
                href: "/tools/base64",
              },
              {
                title: "JSON Formatter",
                description: "Beautify, validate and minify JSON instantly.",
                href: "/tools/json-formatter",
              },
            ]}
          />
        </section>
      </ToolLayout>
    </>
  );
}
