import { createI18n } from "vue-i18n";
import vi from "./locales/vi.json";

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { vi },
  legacy: false,
  globalInjection: true
});
