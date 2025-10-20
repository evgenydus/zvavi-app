import { useTranslations } from 'next-intl'

import { TrendIcon } from './icons'
import PropertyTile from './PropertyTile'

import type { Trend } from '@/business/types'

const Trend = ({ trend }: { trend: Trend }) => {
  const t = useTranslations()

  return (
    <PropertyTile
      property={{
        info: t(`forecast.sections.avalancheProblems.modal.info.trend.${trend}`),
        name: 'trend',
        value: t(`admin.forecast.form.problems.options.trend.${trend}`),
      }}
    >
      <p className="font-semibold">{t(`admin.forecast.form.problems.options.trend.${trend}`)}</p>
      <div className="ml-auto">
        <TrendIcon value={trend} />
      </div>
    </PropertyTile>
  )
}

export default Trend
