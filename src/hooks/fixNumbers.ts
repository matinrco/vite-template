import { useTranslation } from 'react-i18next'

export const useFixNumbers = () => {
  const { i18n } = useTranslation()

  return (str: string, lang: string = i18n.language || ''): string => {
    switch (lang) {
      case 'fa':
        return str.replace(
          /[0-9]/g,
          (w) => ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][+w],
        )
      case 'en':
        return str
          .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
          .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
      default:
        return str
    }
  }
}
