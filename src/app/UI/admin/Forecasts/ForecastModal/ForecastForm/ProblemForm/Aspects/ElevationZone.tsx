import { useTranslations } from 'next-intl'

import { AspectSelector } from './AspectSelector'
import { Field } from '@headlessui/react'
import InputBlock from '../InputBlock'

import type { ElevationZone as ElevationZoneType } from '@/business/types'

const ElevationZone = ({ zone }: { zone: ElevationZoneType }) => {
  const t = useTranslations()

  return (
    <InputBlock label={t(`common.elevationZones.${zone}`)}>
      <Field className="flex-1">
        <AspectSelector />
      </Field>
    </InputBlock>
  )
}

export default ElevationZone
