import TeacherCard from "../components/TeacherCard";
import SectionHeader from "../components/SectionHeader";
import { teachers } from "../data/teachers";

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="👨‍🏫 Ustozlar"
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
          {[
            { icon: "🏅", label: "Sertifikatlangan ustozlar", val: "100%" },
            { icon: "💼", label: "Sanoat tajribasi", val: "4–10 yil" },
            { icon: "🌍", label: "Chet el kompaniyalarida", val: "Google, Microsoft" },
            { icon: "⭐", label: "O'rtacha reyting", val: "4.8 / 5.0" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-green-200 transition-colors"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p className="text-sm font-black text-gray-900 mb-0.5">{item.val}</p>
              <p className="text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
