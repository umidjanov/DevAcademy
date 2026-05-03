export default function WhyDevAcademy() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#000127] lg:p-20 lg:pb-20 px-6 py-12 sm:px-16 sm:py-20 to-[#073e2a] xs:pb-60">
        {/* Deco SVG — o'ng tomonda */}
        <svg
          className="absolute right-0 top-0 bottom-0 h-full pointer-events-none"
          viewBox="0 0 320 160"
          fill="none"
          style={{ width: 320 }}
        >
          <rect
            x="180"
            y="-20"
            width="60"
            height="60"
            rx="8"
            fill="white"
            opacity="0.04"
            transform="rotate(20 180 -20)"
          />
          <rect
            x="240"
            y="20"
            width="80"
            height="80"
            rx="10"
            fill="white"
            opacity="0.05"
            transform="rotate(15 240 20)"
          />
          <rect
            x="150"
            y="60"
            width="50"
            height="50"
            rx="6"
            fill="white"
            opacity="0.04"
            transform="rotate(-10 150 60)"
          />
          <rect
            x="270"
            y="90"
            width="40"
            height="40"
            rx="5"
            fill="white"
            opacity="0.06"
            transform="rotate(30 270 90)"
          />
          <rect
            x="200"
            y="100"
            width="70"
            height="70"
            rx="8"
            fill="white"
            opacity="0.03"
            transform="rotate(-20 200 100)"
          />
          <circle
            cx="310"
            cy="30"
            r="40"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.08"
          />
          <circle
            cx="260"
            cy="130"
            r="30"
            stroke="#4ade80"
            strokeWidth="1"
            opacity="0.15"
          />
          <path
            d="M160 80 L200 40 L240 70 L280 30"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.3"
            fill="none"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10">
          <p
            className="text-xm font-black uppercase tracking-widest mb-3"
            style={{ color: "#4ade90", letterSpacing: "0.1em" }}
          >
            DevAcademy jamoasi
          </p>
          <h2
            className="text-2xl lg:text-4xl sm:text-3xl font-black text-white leading-snug mb-6"
            style={{ maxWidth: 420 }}
          >
            Nima uchun DevAcademyda o'qish kerak?
          </h2>

          <a
            href="#about"
            className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
            style={{ background: "#0B6644", color: "#fff" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
            Videoni ko'rish
          </a>
        </div>
      </div>
    </div>
  );
}
