"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`
    fixed top-0 left-0 w-full z-50
    transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${
      isScrolled
        ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-sm"
        : "bg-transparent"
    }
  `}
>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold gradient-text tracking-tight"
        >
          FastWebTools
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                relative
                text-sm
                font-medium
                text-zinc-600
                dark:text-zinc-300
                transition-colors
                duration-200
                hover:text-black
                dark:hover:text-white
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-current
                after:transition-all
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}

          {/* <ThemeToggle /> */}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-white/95
          dark:bg-black/95
          backdrop-blur-xl
          border-t border-black/5 dark:border-white/10
        `}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium hover:text-blue-500 transition"
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
