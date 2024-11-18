'use client'

import { useTranslations } from 'next-intl'

import { HomeModernIcon, EnvelopeIcon, StarIcon } from '@heroicons/react/20/solid'
import { MenuItem as Item } from '@headlessui/react'
import Link from 'next/link'

import type { HeroIcon } from '@/types'
import type { NavMenuItem } from './types'

const iconRenderers: Record<string, HeroIcon> = {
  envelope: EnvelopeIcon,
  homeModern: HomeModernIcon,
  star: StarIcon,
}

const MenuItem = ({ item }: { item: NavMenuItem }) => {
  const { icon, path, titleId } = item
  const t = useTranslations()
  const IconRenderer = iconRenderers[icon]

  return (
    <Item>
      {({ close }) => (
        <Link className="flex h-12 items-center px-3.5" href={path} onClick={close}>
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
