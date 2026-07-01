"use client";

import FAQ from "../tool/FAQ";

export default function WordCounterFAQ() {
  return (
    <FAQ
      items={[
        {
          question: "How does the Word Counter calculate words?",
          answer:
            "The tool counts words by identifying text separated by spaces, tabs, or line breaks. The count updates instantly while you type or paste text.",
        },
        {
          question: "Is my text uploaded to a server?",
          answer:
            "No. Everything is processed entirely inside your browser. Your text never leaves your device, making the tool private and secure.",
        },
        {
          question: "Is there a maximum character limit?",
          answer:
            "There is no artificial limit imposed by FastWebTools. The only practical limit depends on your browser and your device's available memory.",
        },
        {
          question: "Can I upload TXT files?",
          answer:
            "Yes. You can upload plain text (.txt) files directly into the editor. The content is read locally and is never stored online.",
        },
        {
          question: "Can I download my text?",
          answer:
            "Yes. After editing your content, you can download it as a TXT file with a single click.",
        },
        {
          question: "How is reading time calculated?",
          answer:
            "Reading time is estimated using an average silent reading speed of approximately 200 words per minute. This provides a quick estimate rather than an exact duration.",
        },
        {
          question: "How is speaking time estimated?",
          answer:
            "Speaking time is calculated using an average speaking speed of approximately 130 words per minute, which is commonly used for presentations and speeches.",
        },
        {
          question: "What is lexical diversity?",
          answer:
            "Lexical diversity measures how varied your vocabulary is. A higher percentage indicates a wider range of unique words and generally less repetition.",
        },
        {
          question: "Does this tool support Unicode and emojis?",
          answer:
            "Yes. The editor supports Unicode characters, allowing you to work with multiple languages, symbols, and emojis.",
        },
        {
          question: "Is FastWebTools completely free?",
          answer:
            "Yes. Word Counter and all core FastWebTools utilities are completely free to use with no registration required.",
        },
      ]}
    />
  );
}
