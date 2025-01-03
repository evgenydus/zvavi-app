import { useTranslations } from 'next-intl'

import PropertyWrapper from './PropertyWrapper'
import TimeOfDay from './TimeOfDay'

import type { Problem } from '@/business/types'

const Properties = ({ problem }: { problem: Problem }) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const { avalancheSize, confidence, distribution, sensitivity, timeOfDay, trend } = problem

  return (
    <>
      <div className="flex-1">
        <PropertyWrapper title={tProblems('labels.avalancheSize')}>
          <p>{avalancheSize}</p>
        </PropertyWrapper>

        <TimeOfDay timeOfDay={timeOfDay} />

        <PropertyWrapper title={tProblems('labels.sensitivity')}>
          <p>{tProblems(`options.sensitivityLevel.${sensitivity}`)}</p>
        </PropertyWrapper>
      </div>

      <div className="flex-1">
        <PropertyWrapper title={tProblems('labels.trend')}>
          <p>{tProblems(`options.trend.${trend}`)}</p>
        </PropertyWrapper>

        <PropertyWrapper title={tProblems('labels.confidence')}>
          <p>{tProblems(`options.confidence.${confidence}`)}</p>
        </PropertyWrapper>

        <PropertyWrapper title={tProblems('labels.distribution')}>
          <p>{tProblems(`options.distribution.${distribution}`)}</p>
        </PropertyWrapper>
      </div>
    </>
  )
}

export default Properties
