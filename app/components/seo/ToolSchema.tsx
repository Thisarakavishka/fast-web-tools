import { SITE_CONFIG } from "../../lib/metadata";

import SoftwareApplicationSchema from "./SoftwareApplicationSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import FAQSchema from "./FAQSchema";

interface FAQItem {
  question: string;
  answer: string;
}

interface ToolSchemaProps {
  name: string;
  description: string;
  path: string;
  faqItems: FAQItem[];
  category?: string;
}

export default function ToolSchema({
  name,
  description,
  path,
  faqItems,
  category = "DeveloperApplication",
}: ToolSchemaProps) {
  const url = `${SITE_CONFIG.url}${path}`;

  return (
    <>
      <SoftwareApplicationSchema
        name={name}
        description={description}
        url={url}
        category={category}
      />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: SITE_CONFIG.url,
          },
          {
            name: "Tools",
            url: `${SITE_CONFIG.url}/tools`,
          },
          {
            name,
            url,
          },
        ]}
      />

      <FAQSchema items={faqItems} />
    </>
  );
}
