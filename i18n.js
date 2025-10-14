import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'pt-BR'],
    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
    interpolation: { escapeValue: false },
    resources: {
      es: {
        translation: {
          navbar: { home: "Inicio", excursions: "Excursiones", about: "Nosotros", contact: "Contacto" }
        }
      },
      en: {
        translation: {
          navbar: { home: "Home", excursions: "Excursions", about: "About Us", contact: "Contact" }
        }
      },
      'pt-BR': {
        translation: {
          navbar: { home: "Início", excursions: "Excursões", about: "Sobre Nós", contact: "Contato" }
        }
      }
    }
  });

// Actualiza <html lang=""> y persiste
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng || 'es');
  // Para pt-BR, dejá solo 'pt' en el atributo lang
  document.documentElement.lang = (lng || 'es').split('-')[0];
});

export default i18n;

