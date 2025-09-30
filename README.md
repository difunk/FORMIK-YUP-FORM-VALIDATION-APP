# 🚀 Formik + Yup Form Validation App

## 📋 Über das Projekt

Eine moderne React-Anwendung mit vollständiger Formularvalidierung, professionellem Material UI Design, eleganten Animationen mit framer-motion und TypeScript-Typsicherheit.

<img width="385" height="431" alt="AFTER" src="https://github.com/user-attachments/assets/b49ac9ee-10d9-4054-915e-98f8434cf04a" />

---

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Moderne React-Entwicklung mit Hooks
- **TypeScript 5.8** - Vollständige Typsicherheit und Developer Experience
- **Vite 7** - Modernes Build-Tool für optimale Performance
- **ESLint** - Code-Qualität und Konsistenz

### Frontend Libraries

- **Material UI (MUI) 7** – Professionelles Design System
  - Custom Component-Styling
  - Responsive Layout (Container, Paper, Stack)
  - Typography & Material Icons
  - Modernes, helles Theme mit Glasmorphism-Effekten
- **Formik 2.4** – Robuste Formular-State-Verwaltung
  - Custom Form Components
  - Performance-optimiert mit React.memo
- **Yup 1.7** – Schema-basierte Validierung
  - Complex validation rules
  - Type-safe schemas
- **framer-motion 12** – State-of-the-Art Animationen
  - Animierte Fehleranzeigen ohne Layout-Shift
  - Micro-Interactions & Success-Feedback

---

## 🎯 Features

- **Type-safe Form Components** – Custom Input, Select und Checkbox Komponenten
- **Schema-basierte Validierung** – Yup Integration für robuste Formularvalidierung
- **Modernes UI/UX** – Helles, glasmorphes Theme, hohe Lesbarkeit
- **State-of-the-Art Animationen** – Fehleranzeigen und Success-Feedback mit framer-motion

---

## 🚀 Setup

```bash
npm install
npm run dev    # Development Server
npm run build  # Production Build
```

---

## 📁 Projektstruktur

```
src/
├── components/           # Wiederverwendbare UI-Komponenten
│   ├── AdvancedForm.tsx  # Haupt-Formular mit MUI Layout
│   ├── BasicForm.tsx     # Basis-Formular (Vergleich)
│   ├── CustomInput.tsx   # Type-safe Input Component
│   ├── CustomSelect.tsx  # Type-safe Select Component
│   └── CustomCheckbox.tsx # Type-safe Checkbox Component
├── schemas/              # Yup Validation Schemas
│   └── index.ts         # Zentrale Schema-Definitionen
├── main.tsx             # App Entry Point + Theme Provider
└── App.tsx              # Root Component
```
