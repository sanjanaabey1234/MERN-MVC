import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      settings: {
        title: "Settings",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        language: "Language",
        english: "English",
        spanish: "Spanish",
        backHome: "Back to Home",
      },
    },
  },
  es: {
    translation: {
      settings: {
        title: "Configuración",
        theme: "Tema",
        light: "Claro",
        dark: "Oscuro",
        language: "Idioma",
        english: "Inglés",
        spanish: "Español",
        backHome: "Volver a Inicio",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
