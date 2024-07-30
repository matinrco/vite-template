import { createLazyFileRoute } from '@tanstack/react-router'
import { Login } from '@/containers/Login'

export const Route = createLazyFileRoute('/$locale/login')({
  component: Login,
})
