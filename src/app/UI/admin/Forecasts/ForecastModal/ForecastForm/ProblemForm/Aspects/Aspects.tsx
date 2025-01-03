import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

import InputBlock from '../InputBlock'
import { AspectSelector } from './AspectSelector'

import type { Aspect, ElevationZone as ElevationZoneType, Problem } from '@/business/types'

type AspectsProps = {
  problemData: Problem
  setProblemData: (value: React.SetStateAction<Problem>) => void
}

const Aspects = ({ problemData, setProblemData }: AspectsProps) => {
  const t = useTranslations()

  const handleAspectsSelect = useCallback(
    (zone: ElevationZoneType) => (values: Aspect[]) => {
      setProblemData((prev) => ({
        ...prev,
        aspects: {
          ...prev.aspects,
          [zone]: values,
        },
      }))
    },
    [setProblemData],
  )

  return (
    <div className="flex flex-col gap-3">
      <InputBlock label={t('common.elevationZones.highAlpine')}>
        <AspectSelector
          onChange={handleAspectsSelect('highAlpine')}
          selectedAspects={problemData.aspects.highAlpine}
        />
      </InputBlock>
      <InputBlock label={t('common.elevationZones.alpine')}>
        <AspectSelector
          onChange={handleAspectsSelect('alpine')}
          selectedAspects={problemData.aspects.alpine}
        />
      </InputBlock>
      <InputBlock label={t('common.elevationZones.subAlpine')}>
        <AspectSelector
          onChange={handleAspectsSelect('subAlpine')}
          selectedAspects={problemData.aspects.subAlpine}
        />
      </InputBlock>
    </div>
  )
}

export default Aspects
