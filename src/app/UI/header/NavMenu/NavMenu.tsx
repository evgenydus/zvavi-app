'use client'

import React from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classnames from 'classnames'

import { navMenuItems } from './constants'

import { Icon } from '@/UI/components'
import MenuItem from './MenuItem'

const NavMenu = () => (
  <nav className="relative">
    <Menu>
      <MenuButton as={React.Fragment}>
        {({ open: isOpen }) => (
          <div className="relative size-6 cursor-pointer">
            <Icon
              className={classnames(
                'absolute inset-0 size-6 transition-[opacity,transform] duration-200 ease-in-out',
                isOpen ? 'scale-90 opacity-0 delay-0' : 'scale-100 opacity-100 delay-100',
              )}
              icon="menu"
              size="lg"
            />
            <Icon
              className={classnames(
                'absolute inset-0 transition-[opacity,transform] duration-200 ease-in-out',
                isOpen ? 'scale-100 opacity-100 delay-100' : 'scale-90 opacity-0 delay-0',
              )}
              icon="xMark"
              size="lg"
            />
          </div>
        )}
      </MenuButton>

      <MenuItems
        anchor={{ gap: 4, to: 'bottom end' }}
        className={classnames(
          'absolute top-full z-20 min-w-56 overflow-hidden rounded-2xl text-sm',
          'bg-gray-800 text-white shadow-lg focus:outline-none',
          'origin-top transition duration-200 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0',
        )}
        transition
      >
        {navMenuItems.map((item) => !item.isHidden && <MenuItem key={item.id} item={item} />)}
      </MenuItems>
    </Menu>
  </nav>
)

export default NavMenu
