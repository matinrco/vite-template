import { createFileRoute, redirect } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/$locale/login')({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  beforeLoad: ({
    context: {
      auth: { isLoggedIn },
      i18n: { language },
    },
    search: { redirect: redirectSearchParam },
  }) => {
    if (isLoggedIn && redirectSearchParam) {
      throw redirect({
        to: redirectSearchParam,
      })
    } else if (isLoggedIn) {
      throw redirect({
        to: '/$locale/dashboard',
        params: { locale: language },
      })
    }
  },
})
