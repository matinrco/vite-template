import type { i18n } from 'i18next'

interface Locales {
  en: {
    common: typeof import('./en/common.json')
  }
  fa: {
    common: typeof import('./fa/common.json')
  }
}

declare module 'i18next' {
  interface CustomTypeOptions extends i18n {
    resources: Locales['en']
  }
}
