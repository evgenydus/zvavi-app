'use client'

import {
  avalancheProblemTypes,
  confidenceLevels,
  distributionTypes,
  sensitivityLevels,
  timeOfDay,
  trends,
} from '@/business/constants'
import { generateOptions } from '@/UI/admin/forecast/problems/helpers'
import { useTranslations } from 'next-intl'
import _range from 'lodash/range'

import { Field, Fieldset, Label } from '@headlessui/react'
import { RadioGroup, Textarea } from '@/UI/inputs'
import ElevationZone from './ElevationZone'
import Select from 'react-select'

const ProblemForm = () => {
  const tProblems = useTranslations('admin.forecast.form.problems')

  const problemOptions = generateOptions(
    Object.values(avalancheProblemTypes),
    'options.problemType',
    tProblems,
  )
  const avalancheSizeOptions = _range(1, 6).map((level) => ({ label: level, value: level }))
  const likelihoodOptions = _range(1, 5).map((level) => ({ label: level, value: level }))
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
  const timeOfDayOptions = generateOptions(Object.values(timeOfDay), 'options.timeOfDay', tProblems)
  const trendOptions = generateOptions(Object.values(trends), 'options.trend', tProblems)
  const confidenceOptions = generateOptions(
    Object.values(confidenceLevels),
    'options.confidence',
    tProblems,
  )

  return (
    <Fieldset className="flex flex-col gap-3">
      <Field className="flex items-center gap-3">
        <Label className="w-36 font-semibold">{tProblems('labels.problemType')}</Label>
        <Select options={problemOptions} />
      </Field>

      <div>
        <h3 className="text-xl font-semibold">Aspects</h3>
        <div className="flex flex-col gap-3">
          <ElevationZone zone="highAlpine" />
          <ElevationZone zone="alpine" />
          <ElevationZone zone="subAlpine" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.avalancheSize')}</h4>
        <RadioGroup name="avalancheSize" options={avalancheSizeOptions} />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.likelihood')}</h4>
        <RadioGroup name="likelihood" options={likelihoodOptions} />
      </div>

      <Field className="flex items-start gap-3">
        <Label className="w-36 font-semibold">{tProblems('labels.description')}</Label>
        <Textarea rows={3} />
      </Field>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.sensitivity')}</h4>
        <RadioGroup name="sensitivity" options={sensitivityOptions} />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.distribution')}</h4>
        <RadioGroup name="distribution" options={distributionOptions} />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.timeOfDay')}</h4>
        <RadioGroup name="timeOfDay" options={timeOfDayOptions} />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.trend')}</h4>
        <RadioGroup name="trend" options={trendOptions} />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="w-36 font-semibold">{tProblems('labels.confidence')}</h4>
        <RadioGroup name="confidence" options={confidenceOptions} />
      </div>
    </Fieldset>
  )
}

export default ProblemForm
