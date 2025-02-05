'use client'

import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

import { AvalancheSize, Aspects, Footer, type SetAspectsData } from '../../common'
import { PropertiesSection } from './PropertiesSection'
import { Textarea } from '@/UI/components/inputs'
import ProblemType from './ProblemType'

import type { Problem } from '@/business/types'

type ProblemFormProps = {
  onProblemAdd: () => void
  onProblemCancel: () => void
  problemData: Problem
  setProblemData: (value: React.SetStateAction<Problem>) => void
}

const ProblemForm = ({
  onProblemAdd,
  onProblemCancel,
  problemData,
  setProblemData,
}: ProblemFormProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')

  const handleDescriptionChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setProblemData((prev) => ({
        ...prev,
        description: target.value,
      }))
    },
    [setProblemData],
  )

  const handleRadioChange = useCallback(
    (field: keyof Problem) => (value: string | number) => {
      setProblemData((prev) => ({
        ...prev,
        [field]: value,
      }))
    },
    [setProblemData],
  )

  return (
    <div className="flex flex-col gap-10 rounded border p-3">
      <section className="grid grid-cols-2 items-start gap-x-6">
        <div className="flex flex-col gap-3">
          <ProblemType onTypeChange={setProblemData} problemData={problemData} />
          <AvalancheSize
            onChange={handleRadioChange('avalancheSize')}
            value={problemData.avalancheSize}
          />
        </div>

        <Aspects data={problemData} setData={setProblemData as SetAspectsData} />
      </section>

      <section className="grid grid-cols-2 gap-x-6">
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

      <Footer onCancel={onProblemCancel} onSave={onProblemAdd} />
    </div>
  )
}

export default ProblemForm
