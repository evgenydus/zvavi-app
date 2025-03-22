import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import Summary from './Summary'

import type { Forecast } from '@/business/types'

const CurrentForecast = ({ forecast }: { forecast: Forecast }) => {
  const { hazardLevels, summary } = forecast

  return (
    <section className="space-y-4">
      <HazardLevelBanner hazardLevel={hazardLevels.overall} />
      <Summary summary={summary} />
    </section>
  )
}

export default CurrentForecast
