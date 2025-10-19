'use client'

import { MenuItem as Item } from '@headlessui/react'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Icon } from '@/UI/components'
import type { NavMenuItem } from './types'

const MenuItem = ({ item }: { item: NavMenuItem }) => {
  const { icon, path, titleId } = item
  const t = useTranslations()
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
            <Icon icon={icon} />
            <p>{t(titleId)}</p>
          </div>
        </Link>
      )}
    </Item>
  )
}

export default MenuItem
