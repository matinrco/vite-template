import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div>
      {t('title')}
      <h1>Welcome Home!</h1>
      <h2>this is root page</h2>
      <Link to={`/${i18n.language}/about`}>to about page</Link>
    </div>
  )
}
