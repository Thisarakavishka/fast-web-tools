"use client";

import FAQ from "../tool/FAQ";

export default function Base64FAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is Base64?",
          answer:
            "Base64 is a binary-to-text encoding format that converts data into ASCII text. It is commonly used to safely transmit data through systems that only support text.",
        },
        {
          question: "What is Base64 used for?",
          answer:
            "Base64 is widely used in APIs, JSON payloads, email attachments (MIME), authentication tokens, HTML, CSS, and data URLs for images and other binary files.",
        },
        {
          question: "Is Base64 encryption?",
          answer:
            "No. Base64 is not encryption and provides no security. It simply encodes data into a different representation that can easily be decoded back to its original form.",
        },
        {
          question: "Can Base64 be decoded?",
          answer:
            "Yes. Anyone can decode Base64 data back into its original content without a password or secret key. It should never be used to protect sensitive information.",
        },
        {
          question: "Does Base64 increase file size?",
          answer:
            "Yes. Base64 encoding typically increases the size of data by approximately 33%. This is normal because binary data is converted into printable text characters.",
        },
        {
          question: "Is this Base64 tool secure?",
          answer:
            "Yes. All encoding and decoding are performed locally in your browser. Your data is never uploaded to any server, ensuring complete privacy.",
        },
        {
          question: "Can I encode Unicode or emoji characters?",
          answer:
            "Yes. FastWebTools fully supports UTF-8 text, including emojis, international languages, and special characters.",
        },
        {
          question: "Can I upload a file for Base64 encoding?",
          answer:
            "Yes. Upload a text file and FastWebTools will read its contents locally in your browser before encoding or decoding it.",
        },
        {
          question: "Can I copy or download the converted result?",
          answer:
            "Yes. After encoding or decoding, you can copy the output directly to your clipboard or download it as a text file.",
        },
        {
          question: "Is FastWebTools Base64 Encoder & Decoder free?",
          answer:
            "Yes. FastWebTools is completely free to use with no registration, subscriptions, or hidden costs.",
        },
      ]}
    />
  );
}
