import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { initialProblemData } from '../constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'
import prepareTimeOfDay from './prepareTimeOfDay'

import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemList } from './ProblemList'

import type { Problem } from '@/business/types'
import { ProblemItemEdit } from './ProblemList/ProblemItemEdit'

export type SubmitProblemDto = { data: Problem; index?: number }

type ProblemsSectionProps = {
  problemsFormData: Problem[]
  setProblems: Dispatch<SetStateAction<Problem[]>>
}

export const ProblemsSection = ({ problemsFormData, setProblems }: ProblemsSectionProps) => {
  const tForecast = useTranslations('admin.forecast')

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const [isOpenNewProblem, { setFalse: handleCloseNewProblem, setTrue: handleOpenNewProblem }] =
    useBoolean(false)

  const handleResetProblemData = () => {
    setProblemData(initialProblemData)
  }

  const handleSubmit = useCallback(
    ({ data, index }: SubmitProblemDto) => {
      const preparedProblem = {
        ...data,
        timeOfDay: prepareTimeOfDay(data.timeOfDay),
      }

      if (typeof index === 'number') {
        setProblems((prev) => {
          const newData = [...prev]

          newData[index] = data

          return newData
        })
      } else {
        setProblems((prev) => [...prev, preparedProblem])
      }

      handleResetProblemData()

      handleCloseNewProblem()
    },
    [handleCloseNewProblem, setProblems],
  )

  const handleCancel = useCallback(() => {
    handleCloseNewProblem()
    setProblemData(initialProblemData)
  }, [handleCloseNewProblem])

  const handleDelete = useCallback(
    (index: number) => {
      const newData = [...problemsFormData]

      newData.splice(index, 1)
      setProblems(newData)
    },
    [problemsFormData, setProblems],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

        <Button className="ml-auto" disabled={isOpenNewProblem} onClick={handleOpenNewProblem}>
          <PlusIcon className="size-5" />
          {tForecast('form.problems.labels.addProblem')}
        </Button>
      </div>

      <ProblemList
        editProps={{
          onCancel: handleCancel,
          onSubmit: handleSubmit,
        }}
        isOpenNewProblem={isOpenNewProblem}
        onDelete={handleDelete}
        problemsFormData={problemsFormData}
      />

      {isOpenNewProblem && (
        <ProblemItemEdit
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          problemData={problemData}
        />
      )}
    </section>
  )
}
