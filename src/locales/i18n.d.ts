import type { i18n } from 'i18next'

interface Locales {
  en: {
    common: typeof import('./en/common.json')
    root: typeof import('./en/root.json')
  }
  fa: {
    common: typeof import('./fa/common.json')
    root: typeof import('./fa/root.json')
  }
}

declare module 'i18next' {
  interface CustomTypeOptions extends i18n {
    resources: Locales['en']
  }
}
