import CourseCard from "../components/CourseCard";
import SectionHeader from "../components/SectionHeader";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="IT Kurslar"
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
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0B6644] text-[#0B6644] font-bold px-8 py-3.5 rounded-xl hover:bg-[#0b66450f] transition-all duration-200 text-sm"
          >
            Barcha kurslarni ko'rish
          </a>
        </div>
      </div>
    </section>
  );
}
