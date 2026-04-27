import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const PERKS = [
  { icon: "🎓", title: "Rasmiy sertifikat", desc: "Kursni tugatganlar Xalqaro sertifikat oladi" },
  { icon: "💼", title: "Ish joylashtiramiz", desc: "Bitiruvchilarning 95% ish topgan" },
  { icon: "⚡", title: "Jonli darslar", desc: "Har kuni jonli sessiyalar va code-review" },
];

function InputField({ label, id, type = "text", placeholder, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-300 mb-2">
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
            <span className="inline-block bg-green-900/50 text-green-400 border border-green-800 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              📝 Ro'yxatdan o'tish
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Bugun boshlash uchun{" "}
              <span className="text-green-400">ro'yxatdan o'ting</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Birinchi dars{" "}
              <span className="text-white font-bold">bepul!</span> 30 daqiqa
              ichida qo'ng'iroq qilamiz va sizga mos kursni tavsiya etamiz.
            </p>

            <div className="space-y-5">
              {PERKS.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-lg flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{p.title}</p>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="flex -space-x-2">
                {["🙋", "👨‍💻", "👩‍💼", "🧑‍🎓"].map((e, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center text-sm border-2 border-gray-800"
                  >
                    {e}
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
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-xl font-black text-white mb-3">
                  Tabriklaymiz!
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  So'rovingiz qabul qilindi. Tez orada siz bilan{" "}
                  <span className="text-white font-semibold">{form.phone}</span> raqamiga
                  qo'ng'iroq qilamiz.
                </p>
                <div className="bg-green-900/40 border border-green-800 rounded-2xl p-4">
                  <p className="text-green-400 text-sm font-semibold">
                    ✅ Birinchi dars bepul va hozirdan boshlash mumkin!
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
                      "Bepul darsga yozilish →"
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Ma'lumotlaringiz xavfsiz. Spam yo'q.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
