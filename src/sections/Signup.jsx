import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const PERKS = [
  {
    title: "Rasmiy sertifikat",
    desc: "Kursni tugatganlar Xalqaro sertifikat oladi",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Ish joylashtiramiz",
    desc: "Bitiruvchilarning 95% ish topgan",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Jonli darslar",
    desc: "Har kuni jonli sessiyalar va code-review",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

const socialProofAvatars = [
  { initials: "AK", bg: "#166534" },
  { initials: "NR", bg: "#7e22ce" },
  { initials: "BY", bg: "#1e40af" },
  { initials: "ZN", bg: "#9a3412" },
];

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-700 border-2 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-green-500 ${
          error ? "border-red-500" : "border-gray-600"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = "Ism kamida 2 belgi bo'lishi kerak";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "To'g'ri email manzil kiriting";
    if (!/^\+?[\d\s\-()]{9,}$/.test(form.phone))
      errs.phone = "To'g'ri telefon raqam kiriting";
    return errs;
  }

  function handleChange(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((er) => ({ ...er, [field]: "" }));
    };
  }

  async function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="signup" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Tag */}
            <span className="inline-flex items-center gap-2 bg-green-900/50 text-green-400 border border-green-800 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Ro'yxatdan o'tish
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Bugun boshlash uchun{" "}
              <span className="text-green-400">ro'yxatdan o'ting</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Birinchi dars <span className="text-white font-bold">bepul!</span>{" "}
              30 daqiqa ichida qo'ng'iroq qilamiz va sizga mos kursni tavsiya
              etamiz.
            </p>

            {/* Perks */}
            <div className="space-y-5">
              {PERKS.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">
                      {p.title}
                    </p>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="flex -space-x-2">
                {socialProofAvatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0"
                    style={{ background: a.bg }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                        userSelect: "none",
                      }}
                    >
                      {a.initials}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  +127 kishi bu hafta qo'shildi
                </p>
                <p className="text-xs text-gray-400">O'rinlar cheklangan</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
            {submitted ? (
              <div className="text-center py-8">
                {/* Success icon */}
                <div className="w-20 h-20 rounded-full bg-green-900/50 border border-green-800 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Tabriklaymiz!
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  So'rovingiz qabul qilindi. Tez orada siz bilan{" "}
                  <span className="text-white font-semibold">{form.phone}</span>{" "}
                  raqamiga qo'ng'iroq qilamiz.
                </p>
                <div className="bg-green-900/40 border border-green-800 rounded-2xl p-4 flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-green-400 text-sm font-semibold text-left">
                    Birinchi dars bepul va hozirdan boshlash mumkin!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-white mb-6">
                  Kursga yozilish
                </h3>

                <div className="space-y-5">
                  <InputField
                    label="To'liq ismingiz"
                    id="name"
                    placeholder="Asilbek Karimov"
                    value={form.name}
                    onChange={handleChange("name")}
                    error={errors.name}
                  />
                  <InputField
                    label="Email manzilingiz"
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                  />
                  <InputField
                    label="Telefon raqamingiz"
                    id="phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    error={errors.phone}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-900 text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        Bepul darsga yozilish
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Security note */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <p className="text-xs text-gray-500">
                    Ma'lumotlaringiz xavfsiz. Spam yo'q.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
