export default function Features() {
  return (
    <section className="py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Why FastWebTools?</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {["⚡ Lightning Fast", "🔒 Privacy First", "🚀 No Signup"].map(
            (item) => (
              <div key={item} className="hover:scale-105 transition">
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-gray-500 mt-2">
                  Clean and efficient experience.
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
