export default function Home() {
  return (
    <div>
      <section className="relative w-screen h-screen overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY (FIXED FOR LIGHT/DARK) */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/60 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400 mb-4">
            FAST WEB TOOLS
          </p>

          <h1 className="text-4xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Simple Tools. <br />
            <span className="gradient-text">Powerful Results.</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Free. Fast. No signup. No tracking.
          </p>

          <a
            href="/tools"
            className="mt-10 bg-white text-black px-8 py-4 rounded-full font-bold hover:opacity-80 transition"
          >
            Explore Tools
          </a>
        </div>

        <div className="absolute bottom-6 w-full text-center text-white text-sm opacity-80">
          ↓ Scroll
        </div>
      </section>
    </div>
  );
}
