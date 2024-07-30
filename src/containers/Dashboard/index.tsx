import { useTranslation } from 'react-i18next'

export const Dashboard = () => {
  const { i18n } = useTranslation()

  return <div>Hello /{i18n.language}/dashboard!</div>
}
