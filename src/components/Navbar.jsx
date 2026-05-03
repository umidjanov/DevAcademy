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
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0B6644] rounded-xl flex items-center justify-center text-white font-black text-sm">
              DA
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900">
              Dev<span className="text-[#0B6644]">Academy</span>
            </span>
          </a>

          <div className="flex items-center gap-10">
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-gray-900 hover:text-[#0B6644] transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#signup"
                className="hover:bg-[#0b66450f] text-[#0B6644] border-[2px] border-[#0B6644] text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
              >
                Bepul boshlash
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                className={`block w-5 h-0.5 bg-gray-900 rounded transition-all duration-300 ${cls}`}
              />
            ))}
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
              className="text-sm font-semibold text-gray-900 py-3 border-b border-gray-50 hover:text-[#0B6644] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#signup"
            className="mt-3 bg-[#0B6644] text-white text-sm font-bold px-5 py-3 rounded-xl text-center hover:bg-[#0b6645e3] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Bepul boshlash →
          </a>
        </div>
      </div>
    </nav>
  );
}
