export default function TeacherCard({ teacher }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-green-50 hover:-translate-y-2 transition-all duration-300">
      {/* Avatar */}
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: teacher.bg }}
      >
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {teacher.emoji}
        </span>
        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 text-xs font-bold shadow-sm">
          <span className="text-amber-400">★</span>
          <span className="text-gray-800">{teacher.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-base font-bold text-gray-900 mb-0.5">{teacher.name}</h3>
        <p className="text-sm text-green-600 font-semibold mb-1">{teacher.field}</p>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <span className="w-1 h-1 rounded-full bg-green-300 inline-block" />
          <span>{teacher.exp}</span>
          <span className="mx-1 text-gray-200">•</span>
          <span>{teacher.company}</span>
        </div>

        {/* Students */}
        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div>
            <p className="text-xs text-gray-400">Talabalar</p>
            <p className="text-sm font-bold text-gray-800">
              {teacher.students.toLocaleString()}+
            </p>
          </div>
          <div className="flex gap-2">
            {["🐦", "💼", "📘"].map((icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-green-50 flex items-center justify-center text-sm transition-colors border border-gray-100 hover:border-green-200"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
