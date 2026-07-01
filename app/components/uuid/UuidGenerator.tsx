"use client";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

interface Props {
  amount: number;
  onAmountChange: (value: number) => void;
  onGenerate: () => void;
}

const options = [1, 5, 10, 25, 50, 100];

export default function UuidGenerator({
  amount,
  onAmountChange,
  onGenerate,
}: Props) {
  return (
    <GlassCard className="p-8" hover={false}>
      <SectionTitle
        size="md"
        title="UUID Generator"
        description="Generate secure Version 4 UUIDs instantly in your browser."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-3 block font-semibold">Number of UUIDs</label>

          <select
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className="
              w-full
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              px-5
              py-4
              outline-none
              focus:border-black
              dark:focus:border-white
            "
          >
            {options.map((value) => (
              <option key={value} value={value} className="text-black">
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={onGenerate}
            className="
              w-full
              rounded-2xl
              bg-black
              px-6
              py-4
              text-white
              transition
              hover:opacity-90
              dark:bg-white
              dark:text-black
            "
          >
            Generate UUIDs
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-5">
        <p className="text-sm text-neutral-500">
          Version 4 UUIDs are randomly generated and are widely used for
          database keys, API identifiers, distributed systems, and unique
          resource identifiers.
        </p>
      </div>
    </GlassCard>
  );
}
