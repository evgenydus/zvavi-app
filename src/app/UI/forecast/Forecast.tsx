import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import { HazardLevelsByElevation } from './HazardLevelsByElevation'
import Summary from './Summary'

import type { Forecast as ForecastType } from '@/business/types'

const Forecast = ({ forecast }: { forecast: ForecastType }) => {
  const { hazardLevels, summary } = forecast

  return (
    <main className="space-y-4">
      <HazardLevelBanner hazardLevel={hazardLevels.overall} />
      <Summary summary={summary} />
      <HazardLevelsByElevation hazardLevels={hazardLevels} />
    </main>
  )
}

export default Forecast
