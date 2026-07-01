"use client";

import FAQ from "../tool/FAQ";

export default function JsonFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is a JSON Formatter?",
          answer:
            "A JSON Formatter automatically formats raw JSON into a clean, readable structure using proper indentation. This makes debugging and editing JSON significantly easier.",
        },
        {
          question:
            "What is the difference between formatting and validating JSON?",
          answer:
            "Formatting changes only the appearance of JSON by adding indentation and spacing. Validation checks whether the JSON syntax is correct and identifies errors if the document is invalid.",
        },
        {
          question: "Does this tool send my JSON to a server?",
          answer:
            "No. Everything runs entirely in your browser. Your JSON data is never uploaded or stored, ensuring complete privacy.",
        },
        {
          question: "Can I minify JSON?",
          answer:
            "Yes. You can remove unnecessary whitespace, line breaks, and indentation to create compact JSON suitable for APIs and production environments.",
        },
        {
          question: "Can I sort JSON object keys?",
          answer:
            "Yes. FastWebTools allows you to alphabetically sort object keys, making JSON easier to compare and maintain.",
        },
        {
          question: "What happens if my JSON is invalid?",
          answer:
            "The validator highlights invalid syntax and prevents formatting until the JSON is corrected. Error messages help you identify the issue quickly.",
        },
        {
          question: "Is there a file size limit?",
          answer:
            "There is no artificial limit imposed by FastWebTools. Performance depends primarily on your browser and available system memory.",
        },
        {
          question: "Can I upload JSON files?",
          answer:
            "Yes. Upload a .json file directly from your computer. All processing happens locally in your browser.",
        },
        {
          question: "Can I download formatted JSON?",
          answer:
            "Yes. After formatting or editing your JSON, you can download it as a .json file with a single click.",
        },
        {
          question: "Is FastWebTools JSON Formatter free?",
          answer:
            "Yes. The JSON Formatter, Validator, and all core FastWebTools utilities are completely free with no registration required.",
        },
      ]}
    />
  );
}
