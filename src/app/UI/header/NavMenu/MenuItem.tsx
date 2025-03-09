'use client'

import { useTranslations } from 'next-intl'

import {
  HomeIcon,
  EnvelopeIcon,
  StarIcon,
  UserGroupIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'
import { MenuItem as Item } from '@headlessui/react'
import Link from 'next/link'

import type { HeroIcon } from '@/types'
import type { NavMenuItem } from './types'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'

const iconRenderers: Record<string, HeroIcon> = {
  envelope: EnvelopeIcon,
  home: HomeIcon,
  star: StarIcon,
  userGroup: UserGroupIcon,
  userPlus: UserPlusIcon,
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
            <IconRenderer className="size-5" />
            <p>{t(titleId)}</p>
          </div>
        </Link>
      )}
    </Item>
  )
}

export default MenuItem
