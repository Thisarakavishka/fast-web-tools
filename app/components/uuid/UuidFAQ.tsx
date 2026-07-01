"use client";

import FAQ from "../tool/FAQ";

export default function UuidFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is a UUID?",
          answer:
            "A UUID (Universally Unique Identifier) is a 128-bit value used to uniquely identify records, resources, and objects across systems.",
        },
        {
          question: "What is UUID Version 4?",
          answer:
            "UUID Version 4 is generated using random values, making it suitable for most applications that require unique identifiers.",
        },
        {
          question: "Are these UUIDs secure?",
          answer:
            "Yes. This tool uses your browser's crypto.randomUUID() API when available, producing cryptographically secure Version 4 UUIDs.",
        },
        {
          question: "Can I use these UUIDs in databases?",
          answer:
            "Yes. UUIDs are commonly used as primary keys in SQL and NoSQL databases because they are globally unique.",
        },
        {
          question: "Does this tool send data to a server?",
          answer:
            "No. UUID generation happens entirely inside your browser. Nothing is uploaded or stored.",
        },
      ]}
    />
  );
}
