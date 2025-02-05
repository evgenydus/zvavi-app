import { useTranslations } from 'next-intl'
import PropertyWrapper from './PropertyWrapper'
import type { Aspect, Problem } from '@/business/types'

const getAspectsString = (aspects: Aspect[]) => {
  if (!aspects || aspects.length === 0) return '—'

  return aspects.map((aspect) => aspect.toUpperCase()).join(', ')
}

const Aspects = ({ problem }: { problem: Problem }) => {
  const t = useTranslations()
  const { alpine, highAlpine, subAlpine } = problem.aspects

  return (
    <div className="w-[355px]">
      <PropertyWrapper title={t('common.elevationZones.highAlpine')} titleClassname="w-28">
        <p>{getAspectsString(highAlpine)}</p>
      </PropertyWrapper>

      <PropertyWrapper title={t('common.elevationZones.alpine')} titleClassname="w-28">
        <p>{getAspectsString(alpine)}</p>
      </PropertyWrapper>

      <PropertyWrapper title={t('common.elevationZones.subAlpine')} titleClassname="w-28">
        <p>{getAspectsString(subAlpine)}</p>
      </PropertyWrapper>
    </div>
  )
}

export default Aspects
