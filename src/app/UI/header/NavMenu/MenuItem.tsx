'use client'

import { MenuItem as Item } from '@headlessui/react'
import classnames from 'classnames'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import type { NavMenuItem } from './types'

import { HandshakeIcon, HouseIcon, MailIcon, UserPlusIcon, UsersIcon } from '@/UI/icons'

const iconRenderers: Record<string, LucideIcon> = {
  handshake: HandshakeIcon,
  house: HouseIcon,
  mail: MailIcon,
  userPlus: UserPlusIcon,
  users: UsersIcon,
}

const MenuItem = ({ item }: { item: NavMenuItem }) => {
  const { icon, path, titleId } = item
  const t = useTranslations()
  const IconRenderer = iconRenderers[icon]
  const pathname = usePathname()
  const isActive = pathname.replace(/^\/[a-z]{2}/, '') === (path === '/' ? '' : path)

  return (
    <Item>
      {({ close }) => (
        <Link
          className={classnames('flex h-12 items-center px-4', {
            'bg-white/10 text-primary': isActive,
          })}
          href={path}
          onClick={close}
        >
          <div className="flex items-center gap-2">
            <IconRenderer size={20} />
            <p>{t(titleId)}</p>
          </div>
        </Link>
      )}
    </Item>
  )
}

export default MenuItem
