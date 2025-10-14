import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "es",    label: "ES", sr: "Cambiar idioma a español" },
  { code: "en",    label: "EN", sr: "Switch language to English" },
  { code: "pt-BR", label: "PT", sr: "Mudar idioma para português (Brasil)" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language || "es";

  const change = (lng: string) => i18n.changeLanguage(lng);

  // Considera 'pt' y 'pt-BR' como activo
  const isActive = (code: string) =>
    current === code || (code.startsWith("pt") && current.startsWith("pt"));

  return (
    <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-full">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200
            ${
              isActive(l.code)
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`
          }
          aria-pressed={isActive(l.code)}
        >
          <span className="sr-only">{l.sr}</span>
          <span aria-hidden="true">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
