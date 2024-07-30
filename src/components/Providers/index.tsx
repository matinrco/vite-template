import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/api/config'
import { RouterProvider } from './RouterProvider'

export const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider />
  </QueryClientProvider>
)
