import { useTranslations } from 'next-intl'

import { Field } from '@headlessui/react'
import AspectSelector from './AspectSelector'

import type { ElevationZone as ElevationZoneType } from '@/business/types'

const ElevationZone = ({ zone }: { zone: ElevationZoneType }) => {
  const t = useTranslations()

  return (
    <div className="flex items-center gap-3">
      <h4 className="font-semibold w-36">{t(`common.elevationZones.${zone}`)}</h4>
      <Field>
        <AspectSelector />
      </Field>
    </div>
  )
}

export default ElevationZone
