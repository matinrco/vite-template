import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/api/config'

export const Route = createRootRouteWithContext<{
  queryClient: typeof queryClient
}>()({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <div>page not found!</div>,
})
