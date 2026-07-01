import { breadcrumbSchema } from "../../lib/structured-data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema(items)),
      }}
    />
  );
}
