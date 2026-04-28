import { useState } from "react";

function FieldIcon({ field, color, size }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (field.toLowerCase().includes("frontend")) {
    return (
      <svg {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (
    field.toLowerCase().includes("data") ||
    field.toLowerCase().includes("scientist")
  ) {
    return (
      <svg {...props}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    );
  }
  if (field.toLowerCase().includes("backend")) {
    return (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="7 8 10 11 7 14" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    );
  }
  if (field.toLowerCase().includes("mobile")) {
    return (
      <svg {...props}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  );
}

export default function TeacherAvatar({ teacher, size = 80 }) {
  const [imgError, setImgError] = useState(false);

  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const showImage = teacher.avatar && !imgError;

  return (
    <div
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
    >
      {/* Main circle */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          background: teacher.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        {showImage ? (
          <img
            src={teacher.avatar}
            alt={teacher.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: size * 0.32,
              fontWeight: 700,
              color: teacher.avatarColor,
              letterSpacing: "-0.5px",
              userSelect: "none",
            }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Field badge — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: size * 0.35,
          height: size * 0.35,
          borderRadius: "50%",
          background: "#fff",
          border: "2px solid #f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <FieldIcon
          field={teacher.field}
          color={teacher.avatarColor}
          size={size * 0.18}
        />
      </div>
    </div>
  );
}
