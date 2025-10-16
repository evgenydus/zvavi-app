import classnames from 'classnames'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import type { Forecast } from '@/business/types'

type ForecastMetaProps = {
  forecast: Forecast
  isExtremeRisk: boolean
}

const dateFormat = 'dd MMM yy'

const ForecastMeta = ({ forecast, isExtremeRisk }: ForecastMetaProps) => {
  const t = useTranslations()
  const { createdAt, forecaster, validUntil } = forecast

  return (
    <div
      className={classnames(
        'flex items-start gap-2 text-xs',
        isExtremeRisk ? 'text-white/80' : 'text-black/70',
      )}
    >
      <div className="flex flex-1 flex-col">
        <span className="font-semibold">{t('common.labels.forecaster')}: </span>
        <span>{forecaster}</span>
      </div>

      <div className="flex-none text-right">
        <div>
          <span className="font-semibold">{t('common.labels.issued')}: </span>
          <span>{format(createdAt, dateFormat)}</span>
        </div>
        <div>
          <span className="font-semibold">{t('common.labels.validUntil')}: </span>
          <span>{format(validUntil, dateFormat)}</span>
        </div>
      </div>
    </div>
  )
}

export default ForecastMeta
