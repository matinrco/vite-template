import { createFileRoute, redirect } from '@tanstack/react-router'
import { Route as indexRoute } from './$locale/index/route'

export const Route = createFileRoute('/')({
  loader: ({ context: { i18n } }) => {
    throw redirect({
      to: indexRoute.to,
      params: { locale: i18n.language },
      replace: true,
    })
  },
})
