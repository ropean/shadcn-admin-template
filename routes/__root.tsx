import { useEffect } from 'react'
import { type QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  useMatches,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import { GeneralError } from '@/features/errors/general-error'
import { NotFoundError } from '@/features/errors/not-found-error'

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    title?: string
  }
}

const SITE_NAME = 'Admin'

function RootComponent() {
  const matches = useMatches()

  useEffect(() => {
    const titles = matches
      .map((m) => (m.staticData as { title?: string })?.title)
      .filter(Boolean) as string[]
    document.title = titles.length
      ? [...titles].reverse().join(' - ') + ' - ' + SITE_NAME
      : SITE_NAME
  }, [matches])

  return (
    <>
      <NavigationProgress />
      <Outlet />
      <Toaster duration={5000} />
      {import.meta.env.DEV && import.meta.env.VITE_QUERY_DEVTOOLS === 'true' && (
        <ReactQueryDevtools buttonPosition='bottom-left' />
      )}
      {import.meta.env.DEV &&
        import.meta.env.VITE_ROUTER_DEVTOOLS === 'true' && (
          <TanStackRouterDevtools position='bottom-right' />
        )}
    </>
  )
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
