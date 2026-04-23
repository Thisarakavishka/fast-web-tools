import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-semibold">Start using tools instantly</h2>

      <Link
        href="/tools"
        className="inline-block mt-8 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold animate-pulse"
      >
        Browse Tools
      </Link>
    </section>
  );
}
