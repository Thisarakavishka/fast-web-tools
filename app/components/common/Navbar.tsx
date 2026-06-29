"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        <Link href="/" className="text-2xl font-bold gradient-text">
          FastWebTools
        </Link>

        <div className="hidden md:flex items-center gap-6 text-zinc-500 dark:text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-black dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <div
        className={`${isOpen ? "max-h-96 bg-black" : "max-h-0"} overflow-hidden md:hidden transition-all`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-white">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
