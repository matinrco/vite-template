import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/_auth')({
  component: () => <Outlet />,
  beforeLoad: ({
    context: {
      auth: { isLoggedIn },
      i18n: { language },
    },
    location,
  }) => {
    if (!isLoggedIn) {
      throw redirect({
        to: '/$locale/login',
        params: { locale: language },
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      })
    }
  },
})
