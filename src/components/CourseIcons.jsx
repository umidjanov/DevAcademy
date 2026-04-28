export const FrontendIcon = ({ color = "#166534", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const BackendIcon = ({ color = "#1e40af", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <polyline points="7 8 10 11 7 14" />
    <line x1="13" y1="14" x2="17" y2="14" />
  </svg>
);

export const MobileIcon = ({ color = "#7e22ce", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line
      x1="12"
      y1="18"
      x2="12.01"
      y2="18"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line x1="9" y1="6" x2="15" y2="6" />
  </svg>
);

export const AIIcon = ({ color = "#854d0e", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h-4V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
    <rect x="8" y="11" width="8" height="6" rx="1" />
    <path d="M8 14H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3" />
    <path d="M16 14h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-3" />
    <line x1="10" y1="17" x2="9" y2="21" />
    <line x1="14" y1="17" x2="15" y2="21" />
  </svg>
);

export const DataIcon = ({ color = "#0f766e", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
    <circle cx="18" cy="8" r="1.5" fill={color} stroke="none" />
    <circle cx="12" cy="2" r="1.5" fill={color} stroke="none" />
    <circle cx="6" cy="12" r="1.5" fill={color} stroke="none" />
  </svg>
);

// DataScienceIcon = DataIcon alias (courses.js uchun)
export const DataScienceIcon = DataIcon;

export const DevOpsIcon = ({ color = "#9f1239", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
