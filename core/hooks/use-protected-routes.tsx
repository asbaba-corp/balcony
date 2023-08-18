// hooks/useProtectRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUsers } from '../../contexts/user';

interface Routes {
  routes:  {
    permittedRoutesWithoutToken: string[]
     permittedRoutesWithToken: string[]
  }
}

export function useProtectRoute({routes}:Routes) {
  const { isLoggedIn } = useUsers();
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    async function checkRoutePermission() {
      const isAuth = await isLoggedIn();
      if (isAuth) {
        if (!routes.permittedRoutesWithToken.includes(currentRoute)) {
          router.push('/home');
        }
      } else {
        if (!routes.permittedRoutesWithoutToken.includes(currentRoute)) {
          router.push('/home');
        }
      }
    }

    checkRoutePermission();
  }, [isLoggedIn, router, routes.permittedRoutesWithoutToken, routes.permittedRoutesWithToken, currentRoute]);
}
