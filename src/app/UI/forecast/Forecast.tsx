import { useTranslations } from 'next-intl'

import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import { HazardLevelsByElevation } from './HazardLevelsByElevation'
import { RecentAvalanches } from '@/UI/forecast/RecentAvalanches'
import { Spoiler } from '@/UI/components'

import type { FullForecast } from '@/business/types'

const Forecast = ({ forecast }: { forecast: FullForecast }) => {
  const t = useTranslations()
  const { hazardLevels, recentAvalanches, summary } = forecast

  return (
    <main className="space-y-4">
      <HazardLevelBanner hazardLevel={hazardLevels.overall} />
      <Spoiler title={t('common.labels.summary')}>{summary}</Spoiler>
      <HazardLevelsByElevation hazardLevels={hazardLevels} />
      <RecentAvalanches avalanches={recentAvalanches} />
    </main>
  )
}

export default Forecast
