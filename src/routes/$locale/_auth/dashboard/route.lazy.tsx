import { createLazyFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/containers/Dashboard'

export const Route = createLazyFileRoute('/$locale/_auth/dashboard')({
  component: Dashboard,
})
