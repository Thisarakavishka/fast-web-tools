"use client";

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("tools")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">
          FAST WEB TOOLS
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold">
          Simple Tools. <br />
          <span className="gradient-text">Powerful Results.</span>
        </h1>

        <p className="mt-6 text-gray-500">
          Free. Fast. No signup. No tracking.
        </p>

        <button
          onClick={scrollToNext}
          className="mt-10 px-8 py-4 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          Explore Tools
        </button>
      </div>

      {/* SCROLL BUTTON (BUMPING) */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-6 cursor-pointer animate-bounce text-sm opacity-70"
      >
        ↓ Scroll
      </div>
    </section>
  );
}
