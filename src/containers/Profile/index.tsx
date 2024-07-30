import { useTranslation } from 'react-i18next'

export const Profile = () => {
  const { i18n } = useTranslation()

  return <div>Hello /{i18n.language}/profile!</div>
}
