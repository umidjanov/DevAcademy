export default function Hero() {
  const pills = [
    {
      name: "Frontend",
      students: "2,840",
      bg: "#dcfce7",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#166534"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      name: "AI",
      students: "980",
      bg: "#fef9c3",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#854d0e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="3" fill="#854d0e" />
        </svg>
      ),
    },
    {
      name: "Data Science",
      students: "1,120",
      bg: "#ccfbf1",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0f766e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-emerald-50 rounded-full opacity-60 blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-green-50 rounded-full opacity-50 blur-2xl" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#16a34a"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
              🇺🇿 O'zbekistondagi #1 IT ta'lim platformasi
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-gray-900 mb-6">
              IT kasbingizni{" "}
              <span className="relative">
                <span className="text-green-600">bugundan</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C50 2, 150 2, 198 6"
                    stroke="#86efac"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              boshlang
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
              Professional o'qituvchilar bilan amaliy loyihalar asosida
              zamonaviy IT kasblarga ega bo'ling. 12,000+ talaba allaqachon
              o'sib bormoqda.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#courses"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-200 text-sm inline-flex items-center gap-2"
              >
                Kurslarni ko'rish
                <span className="text-lg">→</span>
              </a>
              <a
                href="#quiz"
                className="bg-white hover:bg-gray-50 text-gray-800 font-bold px-7 py-3.5 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-200 text-sm inline-flex items-center gap-2"
              >
                Yo'nalishni topish
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { n: "12K+", l: "Talabalar" },
                { n: "95%", l: "Ish topdi" },
                { n: "6", l: "Yo'nalish" },
                { n: "4.9", l: "Reyting" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-green-700">
                    {s.n}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5 font-medium">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – visual card */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-green-100 border border-gray-100 p-7 relative z-10">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Mashhur kurslar
                </p>
                <span className="text-xs text-green-600 font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                  Jonli
                </span>
              </div>

              <div className="space-y-3">
                {pills.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-4 p-3.5 rounded-2xl transition-all hover:-translate-x-1 hover:shadow-md cursor-pointer"
                    style={{ background: c.bg + "60" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: c.bg }}
                    >
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800">
                        {c.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {c.students} talaba
                      </p>
                    </div>
                    {/* <span className="text-green-400 text-sm">›</span> */}
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-5 pt-4 border-t border-gray-50">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5 font-medium">
                  <span>Umumiy progress</span>
                  <span className="text-green-600 font-bold">78%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-24 -right-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
              {/* Grafika Icon qismi */}
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <path d="M3 20h18" strokeWidth="2" />
                  <path d="M3 13l4-4 4 4 7-7 3 3" />
                </svg>
              </div>

              {/* Matn qismi */}
              <div className="flex flex-col">
                <p className="text-xs font-bold text-gray-800">95% ish topdi</p>
                <p className="text-xs text-gray-400">bitiruvchilar</p>
              </div>
            </div>

            <div className="absolute -bottom-24 -left-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3">
              {/* Icon qismi (SVG holatida) */}
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 2H5C3.89 2 3 2.89 3 4V16C3 17.11 3.89 18 5 18H8L12 22L16 18H19C20.11 18 21 17.11 21 16V4C21 2.89 20.11 2 19 2ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM17 15H7V14C7 12.34 10.33 11.5 12 11.5C13.67 11.5 17 12.34 17 14V15Z" />
                  <path d="M16 7C16.55 7 17 6.55 17 6C17 5.45 16.55 5 16 5C15.45 5 15 5.45 15 6C15 6.55 15.45 7 16 7Z" />
                  <path d="M19 7C19.55 7 20 6.55 20 6C20 5.45 19.55 5 19 5C18.45 5 18 5.45 18 6C18 6.55 18.45 7 19 7Z" />
                  <path d="M13 7C13.55 7 14 6.55 14 6C14 5.45 13.55 5 13 5C12.45 5 12 5.45 12 6C12 6.55 12.45 7 13 7Z" />
                </svg>
              </div>

              {/* Matn qismi */}
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-gray-800 leading-tight">
                  95% ish topdi
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  bitiruvchilar
                </span>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-green-100 -m-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
