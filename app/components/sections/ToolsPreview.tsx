export default function ToolsPreview() {
  return (
    <section id="tools" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Popular Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Word Counter", "JSON Formatter", "Password Generator"].map(
          (tool) => (
            <div
              key={tool}
              className="p-6 border border-black/10 dark:border-white/10 rounded-xl hover:shadow-xl transition hover:-translate-y-2"
            >
              <h3 className="font-semibold">{tool}</h3>
              <p className="text-sm text-gray-500 mt-2">Use instantly</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
