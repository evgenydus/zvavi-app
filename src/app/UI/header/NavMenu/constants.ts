import type { NavMenuItem } from './types'

export const routes = {
  about: '/about',
  admin: '/admin',
  contact: '/contact',
  forecasts: 'admin/forecasts',
  forgotPassword: '/auth/forgot-password',
  joinUs: '/join-us',
  login: '/auth/login',
  partners: '/partners',
  setNewPassword: '/auth/set-new-password',
}

export const navMenuItems: NavMenuItem[] = [
  {
    icon: 'home',
    id: 'home',
    path: '/',
    titleId: 'navigation.home',
  },
  {
    icon: 'star',
    id: 'partners',
    path: routes.partners,
    titleId: 'navigation.partners',
  },
  {
    icon: 'userGroup',
    id: 'about',
    path: routes.about,
    titleId: 'navigation.about',
  },
  {
    icon: 'userPlus',
    id: 'joinUs',
    path: routes.joinUs,
    titleId: 'navigation.joinUs',
  },
  {
    icon: 'envelope',
    id: 'contact',
    isHidden: true,
    path: routes.contact,
    titleId: 'navigation.contact',
  },
]
