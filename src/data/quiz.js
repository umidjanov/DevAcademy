import {
  FrontendIcon,
  BackendIcon,
  MobileIcon,
  DataIcon,
  AIIcon,
  DevOpsIcon,
} from "../components/CourseIcons";

export const quizQuestions = [
  {
    id: 1,
    question: "Sizga qaysi faoliyat ko'proq yoqadi?",
    options: [
      { text: "Dizayn va ko'rinadigan narsalar yaratish", value: "frontend" },
      { text: "Mantiqiy muammolarni yechish", value: "backend" },
      { text: "Ma'lumotlarni tahlil qilish va grafik chizish", value: "data" },
      { text: "Tizimlarni avtomatlashtirish", value: "devops" },
    ],
  },
  {
    id: 2,
    question: "Qaysi dasturlash tili sizni ko'proq qiziqtiradi?",
    options: [
      { text: "JavaScript / TypeScript", value: "frontend" },
      { text: "Python / Django", value: "backend" },
      { text: "Kotlin / Swift", value: "mobile" },
      { text: "R / Pandas / NumPy", value: "data" },
    ],
  },
  {
    id: 3,
    question: "Ish natijangizni qanday ko'rishni xohlaysiz?",
    options: [
      { text: "Brauzerda go'zal sahifa", value: "frontend" },
      { text: "Tez ishlaydigan server (API)", value: "backend" },
      { text: "iOS/Android ilovasi", value: "mobile" },
      { text: "Grafik va hisobot", value: "data" },
    ],
  },
  {
    id: 4,
    question: "Kreativlik va analitikaning nisbati?",
    options: [
      { text: "Ko'proq kreativ bo'lishni xohlayman", value: "frontend" },
      { text: "Teng miqdorda ikkalasi", value: "mobile" },
      { text: "Ko'proq analitik fikrlash", value: "data" },
      { text: "Texnik tafsilotlar muhimroq", value: "devops" },
    ],
  },
  {
    id: 5,
    question: "Mobil yoki veb ilovalar?",
    options: [
      { text: "Veb ilovalar (saytlar)", value: "frontend" },
      { text: "Mobil ilovalar", value: "mobile" },
      { text: "Backend va API", value: "backend" },
      { text: "Bulut texnologiyalari", value: "devops" },
    ],
  },
  {
    id: 6,
    question: "Sun'iy intellekt sohasi sizni qiziqtiradimi?",
    options: [
      { text: "Ha, juda qiziqarli!", value: "ai" },
      { text: "Biroz qiziqarli", value: "data" },
      { text: "Yo'q, frontend ko'proq", value: "frontend" },
      { text: "DevOps/Cloud ko'proq", value: "devops" },
    ],
  },
  {
    id: 7,
    question: "Kelajakda qaysi kompaniyada ishlashni xohlaysiz?",
    options: [
      { text: "IT startap yoki o'z loyiham", value: "frontend" },
      { text: "Katta texnologiya kompaniyasi", value: "backend" },
      { text: "Freelance / mustaqil", value: "mobile" },
      { text: "Ilmiy-tadqiqot markazi", value: "ai" },
    ],
  },
  {
    id: 8,
    question: "Haftalik necha soat o'qishga vaqt ajrata olasiz?",
    options: [
      { text: "1–5 soat (yengil boshlash)", value: "frontend" },
      { text: "5–10 soat (o'rta jadal)", value: "mobile" },
      { text: "10–15 soat (jiddiy)", value: "backend" },
      { text: "15+ soat (intensiv)", value: "ai" },
    ],
  },
];

export const quizResults = {
  frontend: {
    direction: "Frontend Developer",
    icon: FrontendIcon,
    color: "#16a34a",
    bgColor: "#dcfce7",
    strokeColor: "#166534",
    desc: "Siz kreativ va vizual fikrlovchi insonsiz! React, CSS va zamonaviy UI/UX texnologiyalari orqali millionlab foydalanuvchi ko'radigan interfeyslar yaratishni o'rganing.",
    salary: "$800–2500/oy",
    duration: "6 oy",
  },
  backend: {
    direction: "Backend Developer",
    icon: BackendIcon,
    color: "#1d4ed8",
    bgColor: "#dbeafe",
    strokeColor: "#1e40af",
    desc: "Siz mantiq va arxitektura sevuvchisiz. Node.js, Python, PostgreSQL kabi kuchli texnologiyalar bilan server tomonida ishlashni o'rganing.",
    salary: "$1000–3000/oy",
    duration: "8 oy",
  },
  mobile: {
    direction: "Mobile Developer",
    icon: MobileIcon,
    color: "#7c3aed",
    bgColor: "#f3e8ff",
    strokeColor: "#7e22ce",
    desc: "Kichik ekranda katta ta'sir! React Native yoki Flutter bilan iOS va Android ilovalar yaratishni o'rganing va app marketga chiqaring.",
    salary: "$900–2800/oy",
    duration: "7 oy",
  },
  data: {
    direction: "Data Scientist",
    icon: DataIcon,
    color: "#0d9488",
    bgColor: "#ccfbf1",
    strokeColor: "#0f766e",
    desc: "Ma'lumotlar — kelajak nefti! Python, Pandas va ML algoritmlar yordamida kompaniyalarga qimmatli ma'lumot bashoratlarini berishni o'rganing.",
    salary: "$1200–3500/oy",
    duration: "8 oy",
  },
  ai: {
    direction: "AI Engineer",
    icon: AIIcon,
    color: "#b45309",
    bgColor: "#fef9c3",
    strokeColor: "#854d0e",
    desc: "Kelajak texnologiyasi siz bilan! Sun'iy intellekt, Deep Learning va LLM modellarini o'rganib, innovatsiya sohasida yetakchi bo'ling.",
    salary: "$1500–5000/oy",
    duration: "10 oy",
  },
  devops: {
    direction: "DevOps Engineer",
    icon: DevOpsIcon,
    color: "#be123c",
    bgColor: "#ffe4e6",
    strokeColor: "#9f1239",
    desc: "Infratuzilma — siz uchun. Docker, Kubernetes, CI/CD va Cloud texnologiyalari orqali tizimlarni avtomatlashtirishni o'rganing.",
    salary: "$1100–3200/oy",
    duration: "6 oy",
  },
};
