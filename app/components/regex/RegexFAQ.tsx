"use client";

import FAQ from "../tool/FAQ";

export default function RegexFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "What is a regular expression?",
          answer:
            "A regular expression (Regex) is a pattern used to search, validate and replace text. It is commonly used in programming, form validation and text processing.",
        },
        {
          question: "What do regex flags mean?",
          answer:
            "Flags modify how a regex works. Common flags include g (global), i (case-insensitive), m (multiline), s (dotAll), u (Unicode) and y (sticky).",
        },
        {
          question: "Is this Regex Tester private?",
          answer:
            "Yes. Everything runs locally in your browser. Your regular expressions and text are never uploaded to a server.",
        },
        {
          question: "What are capturing groups?",
          answer:
            "Capturing groups are sections enclosed in parentheses that capture matched text for later use or extraction.",
        },
        {
          question: "Can I use JavaScript regular expressions?",
          answer:
            "Yes. This tool uses the JavaScript RegExp engine available in modern browsers.",
        },
      ]}
    />
  );
}
