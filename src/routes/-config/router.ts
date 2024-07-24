import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { queryClient } from '@/api/config'
import { i18n } from '@/locales/i18n'
import { routeTree } from './routeTree.gen'

export const createRouter = () => {
  return createTanstackRouter({
    routeTree,
    context: {
      queryClient,
      i18n,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })
}
