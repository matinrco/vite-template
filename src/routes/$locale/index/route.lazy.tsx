import { createLazyFileRoute } from '@tanstack/react-router'
import { Root } from '@/containers/Root'

export const Route = createLazyFileRoute('/$locale/')({
  component: Root,
})
