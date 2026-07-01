"use client";

import FAQ from "../tool/FAQ";

export default function UrlFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is URL encoding?",
          answer:
            "URL encoding converts special characters into a format that can be safely transmitted in URLs by replacing them with percent-encoded values.",
        },
        {
          question:
            "What's the difference between encodeURI and encodeURIComponent?",
          answer:
            "encodeURI is designed for complete URLs and leaves reserved URL characters unchanged, while encodeURIComponent encodes almost every special character and is intended for individual URL components such as query parameter values.",
        },
        {
          question: "When should I encode a URL?",
          answer:
            "Encode URLs when sending query parameters, form values, API requests or any text containing spaces or special characters.",
        },
        {
          question: "Is this tool private?",
          answer:
            "Yes. Encoding and decoding happen entirely inside your browser. No data is sent to any server.",
        },
        {
          question: "Can I decode any encoded URL?",
          answer:
            "Yes, provided it is a valid percent-encoded URL or URL component.",
        },
      ]}
    />
  );
}
