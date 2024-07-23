import { createLazyFileRoute } from '@tanstack/react-router'
import { About } from '@/containers/About'

export const Route = createLazyFileRoute('/$locale/about')({
  component: About,
})
