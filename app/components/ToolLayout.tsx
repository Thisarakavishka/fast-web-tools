"use client";

export default function ToolLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-24 px-6 relative">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 opacity-30
        [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        {description && (
          <p className="text-gray-500 max-w-xl mx-auto">{description}</p>
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
