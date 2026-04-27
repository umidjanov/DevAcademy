# DevAcademy — IT ta'lim platformasi

Mohirdev-ga o'xshash zamonaviy landing page. **React + Tailwind CSS** asosida qurilgan.

## Loyiha strukturasi

```
devacademy/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component
    ├── index.css             # Global styles + Tailwind
    │
    ├── data/                 # Ma'lumotlar
    │   ├── courses.js        # 6 ta kurs
    │   ├── teachers.js       # 4 ta ustoz
    │   └── quiz.js           # 8 savol + natijalar
    │
    ├── components/           # Qayta ishlatiladigan komponentlar
    │   ├── Navbar.jsx        # Sticky + mobile menu
    │   ├── CourseCard.jsx    # Kurs kartochkasi
    │   ├── TeacherCard.jsx   # Ustoz kartochkasi
    │   └── SectionHeader.jsx # Sarlavha bloki
    │
    └── sections/             # Sahifa bo'limlari
        ├── Hero.jsx          # Asosiy qism
        ├── Courses.jsx       # Kurslar
        ├── Quiz.jsx          # 8 savollik test
        ├── Teachers.jsx      # Ustozlar
        ├── Signup.jsx        # Ro'yxatdan o'tish + validation
        └── Footer.jsx        # Footer
```

## O'rnatish va ishga tushirish

```bash
# 1. Papkaga kirish
cd devacademy

# 2. Paketlarni o'rnatish
npm install

# 3. Dev serverni ishga tushirish
npm run dev

# 4. Build qilish (production)
npm run build
```

## Texnologiyalar

- **React 18** — functional components + hooks
- **Tailwind CSS 3** — utility-first styling
- **Vite 5** — build tool
- **Bricolage Grotesque** — display font (sarlavhalar)
- **Outfit** — body font

## Bo'limlar

| Bo'lim | Komponent | Tavsif |
|--------|-----------|--------|
| Hero | `sections/Hero.jsx` | Animatsiyali asosiy qism, statistika, floating badges |
| Kurslar | `sections/Courses.jsx` | 6 kurs, hover animatsiyalar |
| Quiz | `sections/Quiz.jsx` | 8 savol, progress bar, natija kartasi |
| Ustozlar | `sections/Teachers.jsx` | 4 ustoz, trust bar |
| Ro'yxat | `sections/Signup.jsx` | Form validation, loading state, success |
| Footer | `sections/Footer.jsx` | Kontaktlar, ijtimoiy tarmoqlar |

## Ranglar

Asosiy rang: **Yashil** (`green-600` = `#16a34a`)

Rang palitrasi:
- `green-50` → fon
- `green-100/200` → engil aksentlar  
- `green-600` → asosiy CTA
- `green-700` → hover holati
