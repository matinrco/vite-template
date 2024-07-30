import { QueryClientProvider } from '@tanstack/react-query'
import {
  MantineProvider,
  ColorSchemeScript,
  DirectionProvider,
} from '@mantine/core'
import { queryClient } from '@/api/config'
import { theme } from '@/utils/theme'
import { RouterProvider } from './RouterProvider'

export const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <DirectionProvider>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <RouterProvider />
      </MantineProvider>
    </DirectionProvider>
  </QueryClientProvider>
)
