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
      name: "AI / ML",
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
          <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h-4V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
          <rect x="8" y="11" width="8" height="5" rx="1" />
          <path d="M8 13H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3" />
          <path d="M16 13h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3" />
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
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      // style={{
      //   background:
      //     // "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 60%, #bbf7d0 100%)",
      // }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-emerald-100 rounded-full opacity-50 blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-green-200 rounded-full opacity-40 blur-2xl" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
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

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 w-full flex flex-col">
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Left ── */}
            <div>
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-gray-900 mb-6">
                IT kasbingizni{" "}
                <span className="relative inline-block">
                  <span className="text-green-700">bugundan</span>
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

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
                Professional o'qituvchilar bilan amaliy loyihalar asosida
                zamonaviy IT kasblarga ega bo'ling. 12,000+ talaba allaqachon
                o'sib bormoqda.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href="#courses"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold lg:px-7 px-5 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-300 text-sm inline-flex items-center gap-2"
                >
                  Kurslarni ko'rish
                </a>
                <a
                  href="#quiz"
                  className="bg-white/80 hover:bg-white text-gray-800 font-bold lg:px-7 px-5 py-3.5 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-200 text-sm inline-flex items-center gap-2 backdrop-blur-sm"
                >
                  Yo'nalishni topish
                </a>
              </div>

              {/* Stats */}
            </div>

            {/* ── Right ── */}
            <div className="lg:block md:hidden relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-green-200 border-[2px] border-green-100 p-7 relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Mashhur kurslar
                  </p>
                  <span className="text-xs text-green-600 font-bold bg- -50 px-2.5 py-1 rounded-full border border-green-100">
                    Jonli
                  </span>
                </div>

                <div className="space-y-3">
                  {pills.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center gap-4 p-3.5 rounded-2xl transition-all hover:-translate-x-1 hover:shadow-md cursor-pointer"
                      style={{ background: c.bg + "70" }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
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
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
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
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-green-200 -m-5 pointer-events-none z-0" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 pt-[50px] lg:gap-[100px] text-center">
          {[
            { n: "12K+", l: "Talabalar" },
            { n: "95%", l: "Ish topdi" },
            { n: "6", l: "Yo'nalish" },
            { n: "4.9", l: "Reyting" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-black text-green-700">{s.n}</div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
