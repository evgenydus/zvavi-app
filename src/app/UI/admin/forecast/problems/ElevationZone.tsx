import { useTranslations } from 'next-intl'

import { AspectSelector } from './AspectSelector'
import { Field } from '@headlessui/react'

import type { ElevationZone as ElevationZoneType } from '@/business/types'

const ElevationZone = ({ zone }: { zone: ElevationZoneType }) => {
  const t = useTranslations()

  return (
    <div className="flex items-center gap-4">
      <h4 className="w-28 flex-none font-semibold">{t(`common.elevationZones.${zone}`)}</h4>
      <Field className="flex-1">
        <AspectSelector />
      </Field>
    </div>
  )
}

export default ElevationZone
