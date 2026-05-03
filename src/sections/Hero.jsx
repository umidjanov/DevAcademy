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

  const features = [
    {
      title: "Vaqtingizni tejang",
      desc: "Jarayonlar avtomatlashtiriladi",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Amaliy loyihalar",
      desc: "Real tajriba, real natija",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
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
      title: "Ish joylashtiramiz",
      desc: "95% bitiruvchi ish topgan",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-4 0v2" />
        </svg>
      ),
    },
    {
      title: "Sertifikat beramiz",
      desc: "Xalqaro tan olingan",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
      {/* Soft green blob — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #dcfce7 0%, #f0fdf4 50%, transparent 80%)",
        }}
      />
      {/* Soft green blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #f0fdf4 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left ── */}
          <div>
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-gray-900 mb-6">
              IT kasbingizni{" "}
              <span className="relative inline-block">
                <span className="text-[#0B6644]">bugundan</span>
              </span>
              <br />
              boshlang
            </h1>

            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Professional o'qituvchilar bilan amaliy loyihalar asosida
              zamonaviy IT kasblarga ega bo'ling
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#courses"
                className="bg-[#0B6644] hover:bg-[#095237] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl flex items-center justify-center hover:shadow-green-100 text-sm"
              >
                Kurslarni ko'rish
              </a>
              <a
                href="#quiz"
                className="bg-white text-[#0B6644] font-bold px-7 py-3.5 rounded-xl border-2 border-[#0B6644] hover:border-[#0B6644] hover:text-[#0B6644] hover:bg-[#0b66450f] transition-all duration-200 text-sm"
              >
                Yo'nalishni topish
              </a>
            </div>

            {/* Features list — 1-rasmdagi ko'rinish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{f.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="lg:block relative">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-green-100 border border-gray-100 p-7 relative z-10">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Mashhur kurslar
                </p>
                <span className="text-xs text-[#0B6644] font-bold bg-green-50 px-3 py-1 rounded-full border border-[#0B6644] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#0B6644] rounded-full animate-pulse" />
                  Jonli
                </span>
              </div>

              <div className="space-y-2.5">
                {pills.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-4 p-3.5 rounded-2xl transition-all hover:-translate-x-1 cursor-pointer"
                    style={{ background: c.bg + "60" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg }}
                    >
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">
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
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                  <span>Umumiy progress</span>
                  <span className="text-[#0B6644] font-bold">78%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0B6644] to-emerald-700 rounded-full"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-green-100 -m-6 pointer-events-none z-0" />
          </div>
        </div>

        {/* ── Stats ── 1-rasmdagi pastki qator */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {
                n: "12K+",
                l: "Talabalar",
                icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
              },
              {
                n: "95%",
                l: "Ish topdi",
                icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
              },
              {
                n: "6",
                l: "Yo'nalish",
                icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
              },
              {
                n: "4.9",
                l: "Reyting",
                icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
              },
            ].map((s) => (
              <div
                key={s.l}
                className="flex items-center gap-4 p-5 rounded-2xl bg-green-50 border border-green-100"
              >
                <div className="w-10 h-10 bg-white rounded-xl border border-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0B6644]">
                    {s.n}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA bar — 1-rasmdagi "Hozirroq sinab ko'ring" ── */}
        <div className="mt-10 bg-[#0B6644] rounded-2xl px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-base">
                Hoziroq boshlash!
              </p>
              <p className="text-gray-100 text-xs">
                Soddalik. Aniqlik. Natija.
              </p>
            </div>
          </div>
          <a
            href="#signup"
            className="bg-white text-[#0B6644] font-black text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-all flex items-center gap-2"
          >
            Bepul boshlash
          </a>
        </div>
      </div>
    </section>
  );
}
