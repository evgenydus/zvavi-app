import { dateFormat } from '@/business/constants'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { Aspects } from '@/UI/admin/Forecasts/ForecastModal/ForecastForm/common/listItem'

import type { Avalanche } from '@/business/types'

const AvalancheItem = ({ avalanche }: { avalanche: Avalanche }) => {
  const t = useTranslations()
  const { date, description, size } = avalanche

  return (
    <div className="flex flex-col gap-4">
      {date && <p className="font-semibold">{format(date, dateFormat)}</p>}
      <div className="flex items-start gap-8">
        <div className="w-20 rounded-lg bg-gray-200 p-2 text-center">
          <h4 className="flex-none font-semibold">
            {t('forecast.sections.recentAvalanches.labels.size')}:
          </h4>

          <p className="text-3xl">{size}</p>
        </div>

        <Aspects item={avalanche} />
      </div>
      <p className="text-justify">{description}</p>
    </div>
  )
}

export default AvalancheItem
