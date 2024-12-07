import type { NavMenuItem } from './types'

export const routes = {
  admin: '/admin',
  contact: '/contact',
  forgotPassword: '/auth/forgot-password',
  login: '/auth/login',
  setNewPassword: '/auth/set-new-password',
  sponsors: '/sponsors',
}

export const navMenuItems: NavMenuItem[] = [
  {
    icon: 'homeModern',
    id: 'home',
    path: '/',
    titleId: 'navigation.home',
  },
  {
    icon: 'star',
    id: 'sponsors',
    path: routes.sponsors,
    titleId: 'navigation.sponsors',
  },
  {
    icon: 'envelope',
    id: 'contact',
    path: routes.contact,
    titleId: 'navigation.contact',
  },
]
