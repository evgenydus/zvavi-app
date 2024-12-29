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
    <Fieldset className="flex flex-col gap-10">
      <div className="grid grid-cols-2 items-start gap-x-14">
        <div className="flex flex-col gap-3">
          <Field className="flex items-center gap-3">
            <Label className="w-32 font-semibold">{tProblems('labels.problemType')}</Label>
            <Select className="flex-1" options={problemOptions} />
          </Field>

          <div className="flex items-center gap-4">
            <h4 className="w-32 font-semibold">{tProblems('labels.avalancheSize')}</h4>
            <RadioGroup name="avalancheSize" options={avalancheSizeOptions} />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <ElevationZone zone="highAlpine" />
            <ElevationZone zone="alpine" />
            <ElevationZone zone="subAlpine" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-14">
        <Field className="flex flex-col gap-4 pt-1.5">
          <Label className="w-32 font-semibold">{tProblems('labels.description')}</Label>
          <Textarea className="w-full" rows={9} />
        </Field>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.sensitivity')}</h4>
            <RadioGroup name="sensitivity" options={sensitivityOptions} />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.distribution')}</h4>
            <RadioGroup name="distribution" options={distributionOptions} />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.timeOfDay')}</h4>
            <RadioGroup name="timeOfDay" options={timeOfDayOptions} />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.trend')}</h4>
            <RadioGroup name="trend" options={trendOptions} />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.confidence')}</h4>
            <RadioGroup name="confidence" options={confidenceOptions} />
          </div>
        </div>
      </div>
    </Fieldset>
  )
}

export default ProblemForm
