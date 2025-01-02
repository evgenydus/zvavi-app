'use client'

import { useCallback, useState } from 'react'

import { useProblemOptions } from './hooks'
import { useTranslations } from 'next-intl'

import { Aspects } from './Aspects'
import { Button, RadioGroup, Textarea } from '@/UI/components/inputs'
import { PropertiesSection } from './PropertiesSection'
import InputBlock from './InputBlock'
import ProblemType from './ProblemType'

import type { Problem } from '@/business/types'

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
  const { avalancheSizeOptions } = useProblemOptions()

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

  return (
    <div className="flex flex-col gap-10">
      <section className="grid grid-cols-2 items-start gap-x-14">
        <div className="flex flex-col gap-3">
          <ProblemType onTypeChange={setProblemData} problemData={problemData} />

          <InputBlock label={tProblems('labels.avalancheSize')} labelClassName="w-32">
            <RadioGroup
              onChange={handleRadioChange('avalancheSize')}
              options={avalancheSizeOptions}
              value={problemData.avalancheSize}
            />
          </InputBlock>
        </div>

        <Aspects />
      </section>

      <section className="grid grid-cols-2 gap-x-14">
        <div className="flex flex-col gap-4 pt-1.5">
          <h4 className="w-32 font-semibold">{tProblems('labels.description')}</h4>
          <Textarea className="w-full" onChange={handleDescriptionChange} rows={9} />
        </div>

        <PropertiesSection
          onRadioChange={handleRadioChange}
          problemData={problemData}
          setProblemData={setProblemData}
        />
      </section>

      <div className="flex items-center justify-end gap-4">
        <Button onClick={onProblemCancel}>{tCommon('actions.cancel')}</Button>
        <Button onClick={onProblemAdd}>{tCommon('actions.save')}</Button>
      </div>
    </div>
  )
}

export default ProblemForm
