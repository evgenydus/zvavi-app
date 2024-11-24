import { dangerIconsBySnowCondition } from '@/UI/constants'
import { dangerLevelsByScale } from '@/business/constants'

import Image from 'next/image'
import Description from './Description'

import type { Forecast } from '@/data/hooks'

const CurrentForecast = ({ forecast }: { forecast: Forecast }) => {
  const { description, dangerLevel, snowCondition } = forecast
  const dangerLevelTitle = dangerLevelsByScale[dangerLevel]
  const icon = dangerIconsBySnowCondition[snowCondition][dangerLevel]

  return (
    <section className="space-y-4">
      <h3 className="text-center text-2xl font-bold">Current forecast</h3>
      <div className="flex items-center justify-center gap-4">
        <Image alt="Logo" src={icon} width={96} />
        <h4 className="text-2xl font-semibold">{dangerLevelTitle}</h4>
      </div>

      <Description description={description} />
    </section>
  )
}

export default CurrentForecast
