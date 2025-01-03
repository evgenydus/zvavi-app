import { useCallback } from 'react'
import { useProblemOptions } from './hooks'
import { useTranslations } from 'next-intl'

import InputBlock from './InputBlock'
import Select from 'react-select'

import type { AvalancheProblemTypes, Problem } from '@/business/types'

type ProblemTypeProps = {
  onTypeChange: (value: React.SetStateAction<Problem>) => void
  problemData: Problem
}

const ProblemType = ({ onTypeChange, problemData }: ProblemTypeProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const { problemTypeOptions } = useProblemOptions()

  const handleTypeChange = useCallback(
    (value: { label: string; value: AvalancheProblemTypes } | null) => {
      onTypeChange((prev) => ({
        ...prev,
        type: value?.value || null,
      }))
    },
    [onTypeChange],
  )

  const problemTypeValue = problemData.type
    ? {
        label: tProblems(`options.problemType.${problemData.type}`),
        value: problemData.type,
      }
    : null

  return (
    <InputBlock label={tProblems('labels.problemType')} labelClassName="w-32">
      <Select
        className="flex-1"
        isClearable
        onChange={handleTypeChange}
        options={problemTypeOptions}
        value={problemTypeValue}
      />
    </InputBlock>
  )
}

export default ProblemType
