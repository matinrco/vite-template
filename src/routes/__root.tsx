import {
  Outlet,
  createRootRouteWithContext,
  notFound,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/api/config'
import { i18n } from '@/locales/i18n'
import { NotFound } from '@/containers/NotFound'
import { Auth } from '@/utils/auth'

export const Route = createRootRouteWithContext<{
  queryClient: typeof queryClient
  i18n: typeof i18n
  auth: Auth
}>()({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFound,
  beforeLoad: ({ context: { i18n }, location }) => {
    /**
     * if locale param value is not a valid locale,
     * then, show 404 page.
     */
    const locale = location.pathname.split('/')[1]
    if (locale && !i18n.languages.includes(locale)) {
      throw notFound()
    }
    /**
     * valid locale found in url,
     * set i18n context to this locale
     */
    if (locale && i18n.languages.includes(locale)) {
      i18n.changeLanguage(locale)
    }
  },
})
