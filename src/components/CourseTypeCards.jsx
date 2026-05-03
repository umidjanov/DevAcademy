export default function CourseTypeCards() {
  const cards = [
    {
      bg: "#0B6644",
      title: "Kurslar",
      href: "#courses",
      desc: "Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar. Sohadagi o'zingizda mavjud bo'shliqni to'ldiring.",
      cta: "31 ta kurs",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      ),
      deco: (
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="18" />
          <circle cx="90" cy="90" r="50" stroke="white" strokeWidth="10" />
          <circle cx="90" cy="90" r="20" stroke="white" strokeWidth="6" />
          <line
            x1="90"
            y1="10"
            x2="90"
            y2="170"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="90"
            x2="170"
            y2="90"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      bg: "#111827",
      title: "Kasblar",
      href: "#kasblar",
      desc: "Kasbga yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga tayyor bo'lib chiqing.",
      cta: "14 ta kasb",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 7l2 2-2 2" />
          <line x1="13" y1="11" x2="17" y2="11" />
          <circle cx="17" cy="17" r="3" />
          <path d="M20 20l2 2" />
        </svg>
      ),
      deco: (
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <rect
            x="20"
            y="20"
            width="140"
            height="140"
            rx="12"
            stroke="white"
            strokeWidth="12"
          />
          <rect
            x="50"
            y="50"
            width="80"
            height="80"
            rx="8"
            stroke="white"
            strokeWidth="8"
          />
          <rect
            x="75"
            y="75"
            width="30"
            height="30"
            rx="4"
            stroke="white"
            strokeWidth="5"
          />
          <line
            x1="20"
            y1="90"
            x2="50"
            y2="90"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="130"
            y1="90"
            x2="160"
            y2="90"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="90"
            y1="20"
            x2="90"
            y2="50"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="90"
            y1="130"
            x2="90"
            y2="160"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-screen-xl lg:mx-auto mx-[20px] container-padding gap-6 grid grid-cols-1 md:grid-cols-2 md:py-5 py-16 lg:mt-[80px]">
      {cards.map((c) => (
        <a
          key={c.title}
          href={c.href}
          className="relative rounded-2xl p-8 overflow-hidden flex flex-col min-h-[260px] cursor-pointer group transition-all duration-200 hover:-translate-y-1"
          style={{ background: c.bg }}
        >
          {/* Deco bg */}
          <div className="absolute -top-8 -right-8 opacity-[0.07] pointer-events-none">
            {c.deco}
          </div>

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            {c.icon}
          </div>

          {/* Text */}
          <h3 className="text-xl font-black text-white mb-2.5">{c.title}</h3>
          <p
            className="text-sm leading-relaxed mb-6 flex-1"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            {c.desc}
          </p>

          {/* Button */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.13)" }}
          >
            <span className="text-sm font-bold text-white">{c.cta}</span>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.18)" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
