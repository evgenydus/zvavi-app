import { useTranslations } from 'next-intl'

import { Spoiler } from '@/UI/components'
import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import AdditionalHazards from './AdditionalHazards'
import { HazardLevelsByElevation } from './HazardLevelsByElevation'
import { Problems } from './Problems'
import { RecentAvalanches } from './RecentAvalanches'
import Snowpack from './Snowpack'
import Weather from './Weather'

import type { FullForecast } from '@/business/types'

const Forecast = ({ forecast }: { forecast: FullForecast }) => {
  const t = useTranslations()
  const {
    additionalHazards,
    hazardLevels,
    problems,
    recentAvalanches,
    snowpack,
    summary,
    weather,
  } = forecast

  return (
    <main className="space-y-4">
      <HazardLevelBanner hazardLevel={hazardLevels.overall} />
      <Spoiler title={t('common.labels.summary')}>{summary}</Spoiler>
      <HazardLevelsByElevation hazardLevels={hazardLevels} />
      <Problems problems={problems} />

      <section className="space-y-4">
        <RecentAvalanches avalanches={recentAvalanches} />
        <Snowpack snowpack={snowpack} />
        {additionalHazards && <AdditionalHazards additionalHazards={additionalHazards} />}
        <Weather weather={weather} />
      </section>
    </main>
  )
}

export default Forecast
