import { useState } from "react";

const kasblar = [
  {
    id: 1,
    author: "Eldor Po'latov",
    title: "DevOps asoslari",
    tag: "Trend",
    cat: "other",
  },
  {
    id: 2,
    author: "Amon Olimov",
    title: "Backend: API arxitekturasi",
    tag: "Yangi",
    cat: "backend",
  },
  {
    id: 3,
    author: "Erkin Isoyev",
    title: "DevOps: funksional kengaytirish",
    tag: "",
    cat: "other",
  },
  {
    id: 4,
    author: "Ivan Doronin",
    title: "LinkedIn'da ish topish",
    tag: "Yangi",
    cat: "other",
  },
  {
    id: 5,
    author: "Muhammadimron Jasurbekov",
    title: "Frontend: React va TypeScript",
    tag: "Mashhur",
    cat: "frontend",
  },
  {
    id: 6,
    author: "Asilbek Karimov",
    title: "Sun'iy Intellekt asoslari",
    tag: "Trend",
    cat: "ai",
  },
];

const filters = [
  { label: "Barcha kasblar", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Sun'iy Intellekt", value: "ai" },
  { label: "Boshqalar", value: "other" },
];

const tagStyle = {
  Trend: "bg-yellow-400/10 text-yellow-300 border border-yellow-400/25",
  Yangi: "bg-green-400/10  text-green-400  border border-green-400/25",
  Mashhur: "bg-green-500/20  text-green-300  border border-green-500/30",
};

function DevOpsIcon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <rect
        x="55"
        y="20"
        width="50"
        height="50"
        rx="25"
        stroke="#4ade80"
        strokeWidth="5"
      />
      <rect
        x="65"
        y="30"
        width="30"
        height="30"
        rx="15"
        stroke="#86efac"
        strokeWidth="4"
      />
      <circle cx="80" cy="45" r="8" fill="#4ade80" />
      <line
        x1="55"
        y1="45"
        x2="40"
        y2="45"
        stroke="#4ade80"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="105"
        y1="45"
        x2="120"
        y2="45"
        stroke="#4ade80"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="35" cy="45" r="5" fill="#166534" />
      <circle cx="125" cy="45" r="5" fill="#166534" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <rect
        x="20"
        y="10"
        width="50"
        height="30"
        rx="6"
        fill="#14532d"
        stroke="#4ade80"
        strokeWidth="1.5"
      />
      <rect
        x="90"
        y="10"
        width="50"
        height="30"
        rx="6"
        fill="#14532d"
        stroke="#86efac"
        strokeWidth="1.5"
      />
      <rect
        x="55"
        y="55"
        width="50"
        height="28"
        rx="6"
        fill="#166534"
        stroke="#4ade80"
        strokeWidth="2"
      />
      <line
        x1="45"
        y1="40"
        x2="80"
        y2="55"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="115"
        y1="40"
        x2="80"
        y2="55"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x="80"
        y="73"
        textAnchor="middle"
        fill="#4ade80"
        fontSize="9"
        fontWeight="700"
      >
        API
      </text>
      <text x="45" y="29" textAnchor="middle" fill="#86efac" fontSize="8">
        Node.js
      </text>
      <text x="115" y="29" textAnchor="middle" fill="#86efac" fontSize="8">
        Python
      </text>
    </svg>
  );
}

function DevOps2Icon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <circle
        cx="80"
        cy="45"
        r="28"
        stroke="#4ade80"
        strokeWidth="3"
        fill="#0d2b17"
      />
      <circle
        cx="80"
        cy="45"
        r="14"
        stroke="#86efac"
        strokeWidth="2.5"
        fill="#14532d"
      />
      <circle cx="80" cy="45" r="5" fill="#4ade80" />
      <line
        x1="80"
        y1="17"
        x2="80"
        y2="8"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="108"
        y1="45"
        x2="117"
        y2="45"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="80"
        y1="73"
        x2="80"
        y2="82"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="45"
        x2="43"
        y2="45"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="80" cy="6" r="4" fill="#166534" />
      <circle cx="119" cy="45" r="4" fill="#166534" />
      <circle cx="80" cy="84" r="4" fill="#166534" />
      <circle cx="41" cy="45" r="4" fill="#166534" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <rect x="45" y="8" width="70" height="70" rx="14" fill="#166534" />
      <rect
        x="52"
        y="15"
        width="56"
        height="56"
        rx="10"
        fill="#14532d"
        stroke="#4ade80"
        strokeWidth="1"
      />
      <text
        x="80"
        y="52"
        textAnchor="middle"
        fill="#4ade80"
        fontSize="22"
        fontWeight="900"
      >
        in
      </text>
      <circle cx="116" cy="20" r="8" fill="#4ade80" />
      <text
        x="116"
        y="24"
        textAnchor="middle"
        fill="#052e16"
        fontSize="9"
        fontWeight="900"
      >
        +
      </text>
    </svg>
  );
}

function FrontendIcon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <polygon
        points="80,8 140,40 140,72 80,88 20,72 20,40"
        fill="#0d2b17"
        stroke="#4ade80"
        strokeWidth="2"
      />
      <polygon
        points="80,20 120,42 120,66 80,76 40,66 40,42"
        fill="none"
        stroke="#86efac"
        strokeWidth="1.5"
      />
      <circle cx="80" cy="48" r="10" fill="#4ade80" />
      <text
        x="80"
        y="52"
        textAnchor="middle"
        fill="#052e16"
        fontSize="10"
        fontWeight="900"
      >
        R
      </text>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 160 90" fill="none" className="w-full max-h-[90px]">
      <circle
        cx="80"
        cy="45"
        r="18"
        fill="#14532d"
        stroke="#4ade80"
        strokeWidth="2"
      />
      <circle cx="80" cy="45" r="7" fill="#4ade80" />
      {[
        ["35", "25"],
        ["125", "25"],
        ["35", "65"],
        ["125", "65"],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="8"
          fill="#0d2b17"
          stroke="#86efac"
          strokeWidth="1.5"
        />
      ))}
      <line
        x1="43"
        y1="28"
        x2="63"
        y2="38"
        stroke="#4ade80"
        strokeWidth="1.2"
      />
      <line
        x1="117"
        y1="28"
        x2="97"
        y2="38"
        stroke="#4ade80"
        strokeWidth="1.2"
      />
      <line
        x1="43"
        y1="62"
        x2="63"
        y2="52"
        stroke="#4ade80"
        strokeWidth="1.2"
      />
      <line
        x1="117"
        y1="62"
        x2="97"
        y2="52"
        stroke="#4ade80"
        strokeWidth="1.2"
      />
    </svg>
  );
}

const icons = {
  1: DevOpsIcon,
  2: BackendIcon,
  3: DevOps2Icon,
  4: LinkedInIcon,
  5: FrontendIcon,
  6: AIIcon,
};

function KasbCard({ kasb }) {
  const Icon = icons[kasb.id];
  return (
    <div
      id="#kasblar"
      className="group flex flex-col min-h-[240px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-green-400"
      style={{
        background: "#0d2b17",
        border: "1.5px solid rgba(74,222,128,0.10)",
        padding: "22px 20px 0",
      }}
    >
      <p
        className="text-xs font-medium mb-2"
        style={{ color: "rgba(255,255,255,0.38)" }}
      >
        {kasb.author}
      </p>
      {kasb.tag && (
        <span
          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full w-fit mb-2 ${tagStyle[kasb.tag]}`}
        >
          {kasb.tag}
        </span>
      )}
      <h3 className="text-base font-black text-white mb-3 leading-snug">
        {kasb.title}
      </h3>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-[11px] font-black tracking-widest uppercase mb-4"
        style={{ color: "#4ade80" }}
      >
        Batafsil
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
      <div className="flex-1 flex items-end justify-center min-h-[90px]">
        <Icon />
      </div>
    </div>
  );
}

export default function Kasblar() {
  const [active, setActive] = useState("all");

  const visible = kasblar.filter((k) => active === "all" || k.cat === active);

  return (
    <section id="kasblar" className="py-20 bg-gray-900 mt-[100px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p
          className="text-xl font-black tracking-[0.1em] uppercase mb-3"
          style={{ color: "#4ade80" }}
        >
          Kasblar
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Kasb yo'nalishlarini tanlang
        </h2>
        <p
          className="text-sm leading-relaxed mb-8 max-w-xl"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Kasbga yo'naltirilgan praktikumlar yordamida eng tez va samarali
          yo'llar bilan mutaxassislar qatoriga qo'shiling.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-5 py-2 rounded-[8px] text-xs font-bold transition-all duration-150"
              style={
                active === f.value
                  ? {
                      background: "#0B6644",
                      color: "#fff",
                    }
                  : {
                      background: "transparent",
                      color: "rgba(255,255,255,0.55)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                    }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((k) => (
            <KasbCard key={k.id} kasb={k} />
          ))}
          {visible.length === 0 && (
            <p
              className="col-span-3 text-center py-16 text-sm"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Bu bo'limda hali kurs mavjud emas
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
