'use client'

import React from 'react'

import { navMenuItems } from './constants'
import classnames from 'classnames'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import MenuItem from './MenuItem'

const NavMenu = () => (
  <nav className="relative">
    <Menu>
      <MenuButton as={React.Fragment}>
        {({ open: isOpen }) =>
          isOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />
        }
      </MenuButton>

      <MenuItems
        className={classnames(
          'absolute right-0 top-full z-20 mt-1 min-w-48 rounded',
          'bg-primary/50 py-1 text-sm focus:outline-none',
          'origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        )}
        transition
      >
        {navMenuItems.map((item) => !item.isHidden && <MenuItem key={item.id} item={item} />)}
      </MenuItems>
    </Menu>
  </nav>
)

export default NavMenu
