import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="📚 IT Kurslar"
          title="Kasbingizni tanlang"
          subtitle="Har bir yo'nalish real loyihalar va amaliy tajriba asosida o'qitiladi. Sertifikat kafolatlanadi."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-green-200 text-green-700 font-bold px-8 py-3.5 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 text-sm"
          >
            Barcha kurslarni ko'rish
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
