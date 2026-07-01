export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 border-t border-black/10 dark:border-white/10">
      © {new Date().getFullYear()} FastWebTools
    </footer>
  );
}
