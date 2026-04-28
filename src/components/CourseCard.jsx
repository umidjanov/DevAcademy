export default function CourseCard({ course }) {
  const IconComponent = course.icon;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-xl hover:shadow-green-50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

      {/* Tag */}
      {course.tag && (
        <span className="absolute top-5 right-5 bg-green-50 text-green-700 border border-green-200 text-xs font-bold px-2.5 py-1 rounded-full">
          {course.tag}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: course.accent }}
      >
        <IconComponent color={course.strokeColor} size={26} />
      </div>

      {/* Title & desc */}
      <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-green-700 transition-colors">
        {course.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {course.desc}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 flex-wrap">
        {[
          { label: course.students + " talaba" },
          { label: course.duration },
          { label: course.level },
        ].map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 text-xs text-gray-400 font-medium"
          >
            <span className="w-1 h-1 rounded-full bg-green-400 inline-block" />
            {m.label}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-sm font-bold text-green-600">
          Batafsil ko'rish →
        </span>
        <span className="text-xs text-gray-300 font-medium">Sertifikat</span>
      </div>
    </div>
  );
}
