import type { NavMenuItem } from './types'

const routes = {
  contact: '/contact',
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
