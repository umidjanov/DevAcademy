const footerLinks = {
  Kurslar: ["Frontend", "Backend", "Mobile", "Data Science", "DevOps", "AI/ML"],
  Kompaniya: ["Biz haqimizda", "Bloq", "Karyera", "Hamkorlik", "Shartlar"],
};

const socials = [
  { icon: "📸", label: "Instagram" },
  { icon: "🐦", label: "Twitter" },
  { icon: "💬", label: "Telegram" },
  { icon: "📘", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
                DA
              </div>
              <span className="font-black text-xl text-white">
                Dev<span className="text-green-500">Academy</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              O'zbekistonning eng yirik IT ta'lim platformasi. 2020-yildan beri 12,000+
              dasturchini tayyorladik.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-sm hover:bg-green-900 hover:border-green-700 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-150"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Aloqa</h4>
            <ul className="space-y-3">
              {[
                { icon: "📍", text: "Toshkent, Yunusobod tumani" },
                { icon: "📞", text: "+998 71 123 45 67" },
                { icon: "✉️", text: "info@devacademy.uz" },
                { icon: "🕐", text: "Dush–Shan: 9:00–18:00" },
              ].map((c) => (
                <li key={c.text} className="flex items-start gap-2.5">
                  <span className="text-sm mt-0.5">{c.icon}</span>
                  <span className="text-sm text-gray-400 leading-snug">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © 2025 DevAcademy. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-5">
            {["Maxfiylik siyosati", "Foydalanish shartlari", "Cookie"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
