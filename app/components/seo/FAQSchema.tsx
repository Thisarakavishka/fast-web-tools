import { faqSchema } from "../../lib/structured-data";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQSchema({ items }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema(items)),
      }}
    />
  );
}
