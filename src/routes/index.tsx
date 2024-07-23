import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: ({ context: { i18n } }) => {
    throw redirect({
      to: `/${i18n.language}`,
      replace: true,
    })
  },
})
