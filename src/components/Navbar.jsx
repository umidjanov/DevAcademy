import { useState, useEffect } from "react";

const navLinks = [
  { label: "Kurslar", href: "#courses" },
  { label: "Quiz", href: "#quiz" },
  { label: "Ustozlar", href: "#teachers" },
  { label: "Ro'yxat", href: "#signup" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111827f8] shadow-sm border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
              DA
            </div>
            <span
              className={`font-black text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-900"
              }`}
            >
              Dev<span className="text-green-500">Academy</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-sm font-semibold transition-colors duration-150 hover:text-green-400 ${
                    scrolled ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className={`text-sm font-semibold transition-colors px-4 py-2 hover:text-green-400 ${
                scrolled ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Kirish
            </a>
            <a
              href="#signup"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900"
            >
              Bepul boshlash
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {[
              menuOpen ? "rotate-45 translate-y-2" : "",
              menuOpen ? "opacity-0" : "",
              menuOpen ? "-rotate-45 -translate-y-2" : "",
            ].map((cls, i) => (
              <span
                key={i}
                className={`block w-5 h-0.5 rounded transition-all duration-300 ${cls} ${
                  scrolled ? "bg-gray-300" : "bg-gray-700"
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-semibold py-3 border-b transition-colors hover:text-green-400 ${
                scrolled
                  ? "text-gray-300 border-gray-800"
                  : "text-gray-700 border-gray-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#signup"
            className="mt-3 bg-green-600 text-white text-sm font-bold px-5 py-3 rounded-xl text-center transition-all hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Bepul boshlash →
          </a>
        </div>
      </div>
    </nav>
  );
}