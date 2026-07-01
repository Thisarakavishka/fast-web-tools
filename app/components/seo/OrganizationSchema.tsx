import { organizationSchema } from "../../lib/structured-data";

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema()),
      }}
    />
  );
}
