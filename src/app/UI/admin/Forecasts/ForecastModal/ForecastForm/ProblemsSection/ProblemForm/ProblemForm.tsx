'use client'

import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'

import { AvalancheSize, Aspects, Footer, type SetAspectsData } from '../../common'
import { PropertiesSection } from './PropertiesSection'
import { Textarea } from '@/UI/components/inputs'
import ProblemType from './ProblemType'

import type { Problem } from '@/business/types'

export type ProblemFormProps = {
  onSave: (data: Problem) => void
  onCancel: () => void
  problemData: Problem
}

const ProblemForm = ({ onCancel, onSave, problemData }: ProblemFormProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')

  const [data, setData] = useState(problemData)

  const handleDescriptionChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setData((prev) => ({
        ...prev,
        description: target.value,
      }))
    },
    [setData],
  )

  const handleRadioChange = useCallback(
    (field: keyof Problem) => (value: string | number) => {
      setData((prev) => ({
        ...prev,
        [field]: value,
      }))
    },
    [setData],
  )

  const handleSave = () => {
    onSave(data)
    onCancel()
  }

  return (
    <div className="flex flex-col gap-10 rounded border p-3">
      <section className="grid grid-cols-2 items-start gap-x-6">
        <div className="flex flex-col gap-3">
          <ProblemType onTypeChange={setData} problemData={data} />
          <AvalancheSize onChange={handleRadioChange('avalancheSize')} value={data.avalancheSize} />
        </div>

        <Aspects data={data} setData={setData as SetAspectsData} />
      </section>

      <section className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col gap-4 pt-1.5">
          <h4 className="w-32 font-semibold">{tProblems('labels.description')}</h4>
          <Textarea className="w-full" onChange={handleDescriptionChange} rows={9} />
        </div>

        <PropertiesSection
          onRadioChange={handleRadioChange}
          problemData={data}
          setProblemData={setData}
        />
      </section>

      <Footer onCancel={onCancel} onSave={handleSave} />
    </div>
  )
}

export default ProblemForm
