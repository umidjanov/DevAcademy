import TeacherCard from "../components/TeacherCard";
import SectionHeader from "../components/SectionHeader";
import { teachers } from "../data/teachers";

const trustItems = [
  {
    label: "Sertifikatlangan ustozlar",
    val: "100%",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    iconBg: "#dbeafe",
  },
  {
    label: "Sanoat tajribasi",
    val: "4–10 yil",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#166534"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-4 0v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    iconBg: "#dcfce7",
  },
  {
    label: "Chet el kompaniyalarida",
    val: "Google, Microsoft",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7e22ce"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    iconBg: "#f3e8ff",
  },
  {
    label: "O'rtacha reyting",
    val: "4.8 / 5.0",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#facc15"
        stroke="#facc15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    iconBg: "#fef9c3",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="Bizning ustozlarimiz"
          title="Tajribali mutaxassislar"
          subtitle="Real sanoatda ishlagan va o'z sohasida tan olingan mutaxassislar sizni kasbga tayyorlaydi"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-[#0B6644] transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: item.iconBg }}
              >
                {item.icon}
              </div>
              <p className="text-sm font-black text-gray-900 mb-0.5">
                {item.val}
              </p>
              <p className="text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
