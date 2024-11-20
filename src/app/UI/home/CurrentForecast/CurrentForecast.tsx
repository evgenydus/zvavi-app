import { dangerLevelsByScale } from '@/business/constants'
import { dangerIconsBySnowCondition } from '@/UI/constants'

import Image from 'next/image'
import Description from './Description'

const dataMock = {
  current: {
    createdAt: '2024-11-18T10:00:00Z',
    dangerLevel: 2,
    description:
      'Natural avalanches are unlikely, human-triggered avalanches are possible. Small avalanches in specific areas, or large avalanches in isolated areas.\n' +
      'Recent snow and a period of wind bring a possibility of windslabs up high, and lower down the snow is wet with a danger of wet loose and glide avalanches. There are still areas of buried weak snow in the high alpine. \n' +
      'Overall danger stays the same but the problems are a little different - read the full details by clicking on the current forecast.',
    snowCondition: 'dry',
    validTo: '2024-11-20T16:00:00Z',
  },
} as const

const CurrentForecast = () => {
  const { description, dangerLevel, snowCondition } = dataMock.current
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
