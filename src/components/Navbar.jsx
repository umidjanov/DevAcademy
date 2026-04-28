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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
              DA
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900">
              Dev<span className="text-green-600">Academy</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors duration-150"
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
              className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
            >
              Kirish
            </a>
            <a
              href="#signup"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200"
            >
              Bepul boshlash
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-gray-700 py-3 border-b border-gray-50 hover:text-green-600 transition-colors"
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
