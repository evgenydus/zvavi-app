import { hazardIconsBySnowCondition } from '@/UI/constants'
import { hazardLevelsByScale } from '@/business/constants'

import Image from 'next/image'
import Description from './Description'

import type { Forecast } from '@/data/hooks'

const CurrentForecast = ({ forecast }: { forecast: Forecast }) => {
  const { description, hazardLevel, snowCondition } = forecast
  const hazardLevelTitle = hazardLevelsByScale[hazardLevel]
  const icon = hazardIconsBySnowCondition[snowCondition][hazardLevel]

  return (
    <section className="space-y-4">
      <h3 className="text-center text-2xl font-bold">Current forecast</h3>
      <div className="flex items-center justify-center gap-4">
        <Image alt="Logo" src={icon} width={96} />
        <h4 className="text-2xl font-semibold">{hazardLevelTitle}</h4>
      </div>

      <Description description={description} />
    </section>
  )
}

export default CurrentForecast
