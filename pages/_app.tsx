import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useProtectRoute } from '../core/hooks/use-protected-routes'
import { UserProvider } from '../contexts/user'
import { RecipeProvider } from '../contexts/recipe'
import { OPEN_ROUTES, PROTECTED_ROUTES } from '../constants/app.routes'
import {QueryClient, QueryClientProvider, Hydrate} from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const appRoutes = {
    accessibleWithoutValidToken: OPEN_ROUTES,
    accessibleWithValidToken: PROTECTED_ROUTES
  }
  useProtectRoute({
    routes: {
      permittedRoutesWithoutToken: appRoutes.accessibleWithValidToken,
      permittedRoutesWithToken: appRoutes.accessibleWithoutValidToken
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserProvider>
          <RecipeProvider>
            <Component {...pageProps} />
          </RecipeProvider>
        </UserProvider>

      </Hydrate>
    </QueryClientProvider>
  )

}

export default MyApp
