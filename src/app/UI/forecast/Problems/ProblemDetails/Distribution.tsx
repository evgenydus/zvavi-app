import { useTranslations } from 'next-intl'

import { DistributionIcon } from './icons'
import PropertyTile from './PropertyTile'

import type { Distribution } from '@/business/types'

const Distribution = ({ distribution }: { distribution: Distribution }) => {
  const t = useTranslations()

  return (
    <PropertyTile
      property={{
        info: t(`forecast.sections.avalancheProblems.modal.info.distribution.${distribution}`),
        name: 'distribution',
        value: t(`admin.forecast.form.problems.options.distribution.${distribution}`),
      }}
    >
      <p className="font-semibold">
        {t(`admin.forecast.form.problems.options.distribution.${distribution}`)}
      </p>

      <div className="ml-auto">
        <DistributionIcon distribution={distribution} />
      </div>
    </PropertyTile>
  )
}

export default Distribution
