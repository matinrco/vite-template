/// <reference types="./locales/i18n.d.ts" />
/// <reference types="./routes/-config/router.d.ts" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
