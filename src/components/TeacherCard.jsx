import TeacherAvatar from "./TeacherAvatar";

export default function TeacherCard({ teacher }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#0B6644] transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
        <TeacherAvatar teacher={teacher} size={80} />
      </div>

      {/* Name */}
      <h4 className="text-base font-bold text-gray-900 mb-0.5 group-hover:text-[0b66450f] transition-colors">
        {teacher.name}
      </h4>

      {/* Field */}
      <p className="text-xs font-semibold text-[#0B6644] mb-1">
        {teacher.field}
      </p>

      {/* Company */}
      <p className="text-xs text-gray-500 mb-4">
        {teacher.company} · {teacher.exp}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-3 w-full justify-center border-t border-gray-50 pt-4">
        <div className="flex items-center gap-1.5">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-xs text-gray-400 font-medium">
            {teacher.students.toLocaleString()}
          </span>
        </div>

        <span className="text-gray-200">|</span>

        <div className="flex items-center gap-1">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="#facc15"
            stroke="#facc15"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-xs font-bold text-gray-900">
            {teacher.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
