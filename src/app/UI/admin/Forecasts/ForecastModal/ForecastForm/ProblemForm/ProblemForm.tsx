'use client'

import { useCallback, useState } from 'react'

import { useProblemOptions } from './hooks'
import { useTranslations } from 'next-intl'

import { Field, Fieldset, Label } from '@headlessui/react'
import { Button, RadioGroup, Textarea } from '@/UI/components/inputs'
import ElevationZone from './ElevationZone'
import Select from 'react-select'
import TimeOfDay from './TimeOfDay'

import type { AvalancheProblemTypes, Problem } from '@/business/types'

const initialProblemData: Problem = {
  avalancheSize: 1,
  confidence: 'low',
  description: '',
  distribution: 'isolated',
  sensitivity: 'reactive',
  timeOfDay: 'allDay',
  trend: 'deteriorating',
  type: null,
}

type ProblemFormProps = {
  onProblemAdd: () => void
  onProblemCancel: () => void
}

const ProblemForm = ({ onProblemAdd, onProblemCancel }: ProblemFormProps) => {
  const tCommon = useTranslations('common')
  const tProblems = useTranslations('admin.forecast.form.problems')

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const {
    avalancheSizeOptions,
    confidenceOptions,
    distributionOptions,
    problemTypeOptions,
    sensitivityOptions,
    trendOptions,
  } = useProblemOptions()

  const handleDescriptionChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setProblemData((prev) => ({
        ...prev,
        description: target.value,
      }))
    },
    [],
  )

  const handleRadioChange = useCallback(
    (field: keyof Problem) => (value: string | number) => {
      setProblemData((prev) => ({
        ...prev,
        [field]: value,
      }))
    },
    [],
  )

  const handleTypeChange = useCallback(
    (value: { label: string; value: AvalancheProblemTypes } | null) => {
      setProblemData((prev) => ({
        ...prev,
        type: value?.value || null,
      }))
    },
    [],
  )

  const problemTypeValue = problemData.type
    ? {
        label: tProblems(`options.problemType.${problemData.type}`),
        value: problemData.type,
      }
    : null

  return (
    <Fieldset className="flex flex-col gap-10">
      <div className="grid grid-cols-2 items-start gap-x-14">
        <div className="flex flex-col gap-3">
          <Field className="flex items-center gap-3">
            <Label className="w-32 font-semibold">{tProblems('labels.problemType')}</Label>
            <Select
              className="flex-1"
              isClearable
              onChange={handleTypeChange}
              options={problemTypeOptions}
              value={problemTypeValue}
            />
          </Field>

          <div className="flex items-center gap-4">
            <h4 className="w-32 font-semibold">{tProblems('labels.avalancheSize')}</h4>
            <RadioGroup
              name="avalancheSize"
              onChange={handleRadioChange('avalancheSize')}
              options={avalancheSizeOptions}
              value={problemData.avalancheSize}
            />
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
          <Textarea className="w-full" onChange={handleDescriptionChange} rows={9} />
        </Field>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.sensitivity')}</h4>
            <RadioGroup
              name="sensitivity"
              onChange={handleRadioChange('sensitivity')}
              options={sensitivityOptions}
              value={problemData.sensitivity}
            />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.distribution')}</h4>
            <RadioGroup
              name="distribution"
              onChange={handleRadioChange('distribution')}
              options={distributionOptions}
              value={problemData.distribution}
            />
          </div>

          <TimeOfDay onTimeChange={setProblemData} problemData={problemData} />

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.trend')}</h4>
            <RadioGroup
              name="trend"
              onChange={handleRadioChange('trend')}
              options={trendOptions}
              value={problemData.trend}
            />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="w-28 font-semibold">{tProblems('labels.confidence')}</h4>
            <RadioGroup
              name="confidence"
              onChange={handleRadioChange('confidence')}
              options={confidenceOptions}
              value={problemData.confidence}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button onClick={onProblemCancel}>{tCommon('actions.cancel')}</Button>
        <Button onClick={onProblemAdd}>{tCommon('actions.save')}</Button>
      </div>
    </Fieldset>
  )
}

export default ProblemForm
