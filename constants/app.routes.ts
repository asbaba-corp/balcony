
export const LIST_RECIPES = '/recipes/list'


export const protectedRoutes = ['/user/login', '/user/register']
export const loginRoutes =  ['/home', LIST_RECIPES]


export const OPEN_ROUTES = [...loginRoutes]
export const PROTECTED_ROUTES = [...protectedRoutes]

