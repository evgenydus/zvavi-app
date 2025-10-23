import { useTranslations } from 'next-intl'

import { AspectRose } from './icons'
import PropertyTile from './PropertyTile'

import type { Aspects } from '@/business/types'

const Aspects = ({ aspects }: { aspects: Aspects }) => {
  const t = useTranslations()

  return (
    <PropertyTile
      property={{
        info: t('forecast.sections.avalancheProblems.modal.info.aspects'),
        name: 'aspects',
      }}
    >
      <AspectRose selectedAspects={aspects} />
    </PropertyTile>
  )
}

export default Aspects
