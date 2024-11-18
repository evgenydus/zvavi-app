import Image from 'next/image'
import { dangerLevelsByScale } from '@/business/constants'
import { dangerIconsBySnowCondition } from '@/UI/constants'

const dataMock = {
  current: {
    createdAt: '2024-11-18T10:00:00Z',
    dangerLevel: 2,
    description: 'Moderate danger',
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
      <div className="flex items-center gap-4 justify-center">
        <Image alt="Logo" src={icon} width={96} />
        <h4 className="text-2xl font-semibold">{dangerLevelTitle}</h4>
      </div>

      <p>{description}</p>
    </section>
  )
}

export default CurrentForecast
