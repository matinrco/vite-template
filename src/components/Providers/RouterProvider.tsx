import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { createRouter } from '@/routes/-config/router'
import { auth } from '@/utils/auth'

const router = createRouter()

export const RouterProvider = () => {
  // we can hydrate the initial state of 'auth' here

  return <TanstackRouterProvider router={router} context={{ auth }} />
}
