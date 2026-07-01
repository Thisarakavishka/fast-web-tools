"use client";

import FAQ from "../tool/FAQ";

export default function HashFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is a cryptographic hash?",
          answer:
            "A cryptographic hash is a one-way mathematical function that converts input data into a fixed-length string. The same input always produces the same output.",
        },
        {
          question: "Is hashing the same as encryption?",
          answer:
            "No. Encryption is reversible with the correct key, while hashing is designed to be one-way and cannot be reversed back into the original text.",
        },
        {
          question: "Which hash algorithm should I use?",
          answer:
            "For modern applications, SHA-256 or stronger algorithms such as SHA-384 and SHA-512 are recommended. MD5 and SHA-1 should only be used for legacy compatibility because they are no longer considered collision resistant.",
        },
        {
          question: "Is this Hash Generator secure?",
          answer:
            "Yes. SHA algorithms are generated using your browser's built-in Web Crypto API. Everything happens locally in your browser and your data is never uploaded to any server.",
        },
        {
          question: "Can I hash passwords with this tool?",
          answer:
            "This tool is useful for learning, testing and verification. For storing passwords in production applications, use dedicated password hashing algorithms such as Argon2, bcrypt or scrypt instead of plain SHA hashes.",
        },
        {
          question: "Does this tool store my data?",
          answer:
            "No. All hashing is performed locally in your browser. Your input never leaves your device.",
        },
      ]}
    />
  );
}
