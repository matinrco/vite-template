import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Route as aboutRoute } from '@/routes/$locale/about/route'

export const Root = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div>
      {t('title')}
      <h1>Welcome!</h1>
      <h2>this is root page</h2>
      <Link to={aboutRoute.to} params={{ locale: i18n.language }}>
        to about page
      </Link>
    </div>
  )
}
