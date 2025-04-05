import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import type { Forecast as ForecastType } from '@/business/types'

const Forecast = ({ forecast }: { forecast: ForecastType }) => {
  return (
    <div>
      <HazardLevelBanner hazardLevel={forecast.hazardLevels.overall} />
    </div>
  )
}

export default Forecast
