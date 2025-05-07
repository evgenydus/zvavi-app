import { type Dispatch, type SetStateAction, useCallback } from 'react'
import { useProblemOptions } from '../../common/hooks'
import { useTranslations } from 'next-intl'

import { InputBlock } from '../../common'
import Select from 'react-select'

import type { AvalancheProblemTypes, Problem } from '@/business/types'

type ProblemTypeProps = {
  onTypeChange: Dispatch<SetStateAction<Problem>>
  problemData: Problem
}

const ProblemType = ({ onTypeChange, problemData }: ProblemTypeProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const { problemTypeOptions } = useProblemOptions()

  const handleTypeChange = useCallback(
    (value: { value: AvalancheProblemTypes } | null) => {
      onTypeChange((prev) => ({
        ...prev,
        type: value?.value as AvalancheProblemTypes,
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
        onChange={handleTypeChange}
        options={problemTypeOptions}
        value={problemTypeValue}
      />
    </InputBlock>
  )
}

export default ProblemType
