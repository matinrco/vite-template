import { createLazyFileRoute } from '@tanstack/react-router'
import { Profile } from '@/containers/Profile'

export const Route = createLazyFileRoute('/$locale/_auth/profile')({
  component: Profile,
})
