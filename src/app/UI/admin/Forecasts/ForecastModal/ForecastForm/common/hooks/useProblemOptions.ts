import {
  avalancheProblemTypes,
  confidenceLevels,
  distributionTypes,
  sensitivityLevels,
  trends,
} from '@/business/constants'
import { generateOptions } from '../helpers'
import { useTranslations } from 'next-intl'
import _range from 'lodash/range'

import type { AvalancheProblemTypes } from '@/business/types'

const useProblemOptions = () => {
  const tProblems = useTranslations('admin.forecast.form.problems')

  const problemTypeOptions = generateOptions(
    Object.values(avalancheProblemTypes),
    'options.problemType',
    tProblems,
  ) as { label: string; value: AvalancheProblemTypes }[]

  const avalancheSizeOptions = _range(1, 6).map((level) => ({ label: level, value: level }))
  const sensitivityOptions = generateOptions(
    Object.values(sensitivityLevels),
    'options.sensitivityLevel',
    tProblems,
  )
  const distributionOptions = generateOptions(
    Object.values(distributionTypes),
    'options.distribution',
    tProblems,
  )

  const trendOptions = generateOptions(Object.values(trends), 'options.trend', tProblems)
  const confidenceOptions = generateOptions(
    Object.values(confidenceLevels),
    'options.confidence',
    tProblems,
  )
  const hazardLevelOptions = _range(1, 6).map((level) => ({ label: level, value: String(level) }))

  return {
    avalancheSizeOptions,
    confidenceOptions,
    distributionOptions,
    hazardLevelOptions,
    problemTypeOptions,
    sensitivityOptions,
    trendOptions,
  }
}

export default useProblemOptions
