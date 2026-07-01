import { websiteSchema } from "../../lib/structured-data";

export default function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema()),
      }}
    />
  );
}
