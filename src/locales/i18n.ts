import i18n from 'i18next'
import i18nResourcesToBackend from 'i18next-resources-to-backend'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(
    i18nResourcesToBackend(
      (language: string, namespace: string) =>
        import(`@/locales/${language}/${namespace}.json`),
    ),
  )
  .use(i18nLanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'fa',
    supportedLngs: ['en', 'fa'],
    fallbackLng: ['en', 'fa'],
    interpolation: {
      escapeValue: false,
    },
  })

export { i18n }
