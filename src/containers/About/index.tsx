import { useTranslation } from 'react-i18next'

export const About = () => {
  const { i18n } = useTranslation()

  return <div>Hello /{i18n.language}/about!</div>
}
