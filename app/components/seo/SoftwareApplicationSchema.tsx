import { softwareApplicationSchema } from "../../lib/structured-data";

interface Props {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export default function SoftwareApplicationSchema({
  name,
  description,
  url,
  category,
}: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          softwareApplicationSchema({
            name,
            description,
            url,
            category,
          }),
        ),
      }}
    />
  );
}
