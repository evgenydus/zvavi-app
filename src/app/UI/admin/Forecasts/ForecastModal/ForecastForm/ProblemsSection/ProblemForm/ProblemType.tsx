import { type Dispatch, type SetStateAction, useCallback, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import Select from 'react-select'

import { InputBlock } from '../../common'
import { useProblemOptions } from '../../common/hooks'

import type { AvalancheProblemTypes, Problem } from '@/business/types'

type ProblemTypeProps = {
  onTypeChange: Dispatch<SetStateAction<Problem>>
  problemData: Problem
  selectedProblemTypes: AvalancheProblemTypes[]
}

const ProblemType = ({ onTypeChange, problemData, selectedProblemTypes }: ProblemTypeProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const { problemTypeOptions } = useProblemOptions()

  const filteredProblemTypeOptions = useMemo(() => {
    const selectedTypes = new Set(selectedProblemTypes.filter(Boolean))

    if (problemData.type) {
      selectedTypes.delete(problemData.type)
    }

    return problemTypeOptions.filter((option) => !selectedTypes.has(option.value))
  }, [problemTypeOptions, selectedProblemTypes, problemData.type])

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
        options={filteredProblemTypeOptions}
        value={problemTypeValue}
      />
    </InputBlock>
  )
}

export default ProblemType
