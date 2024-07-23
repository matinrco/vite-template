import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from '@/containers/Home'

export const Route = createLazyFileRoute('/$locale/')({
  component: Home,
})
