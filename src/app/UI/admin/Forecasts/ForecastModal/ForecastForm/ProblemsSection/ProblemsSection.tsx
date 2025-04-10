import _uniqueId from 'lodash/uniqueId'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import { initialProblemData } from '../constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'
import prepareTimeOfDay from './prepareTimeOfDay'

import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemList } from './ProblemList'

import type { Problem } from '@/business/types'
import { ProblemForm } from './ProblemForm'

type ProblemsSectionProps = {
  problems: Problem[]
  setProblems: Dispatch<SetStateAction<Problem[]>>
}

const ProblemsSection = ({ problems, setProblems }: ProblemsSectionProps) => {
  const tForecast = useTranslations('admin.forecast')

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const [isOpenNewProblem, { setFalse: closeNewProblem, setTrue: openNewProblem }] =
    useBoolean(false)

  const handleResetProblemData = () => {
    setProblemData(initialProblemData)
  }

  const handleSubmit = useCallback(
    (data: Problem) => {
      const preparedProblem: Problem = {
        id: _uniqueId('problem-'),
        ...data,
        timeOfDay: prepareTimeOfDay(data.timeOfDay),
      }

      if (data.id) {
        setProblems((prev) => {
          const newData = [...prev]
          const index = newData.findIndex((el) => el.id === data.id)

          newData[index] = preparedProblem

          return newData
        })
      } else {
        setProblems((prev) => [...prev, preparedProblem])
      }

      handleResetProblemData()
      closeNewProblem()
    },
    [closeNewProblem, setProblems],
  )

  const handleCancel = useCallback(() => {
    closeNewProblem()
    setProblemData(initialProblemData)
  }, [closeNewProblem])

  const handleDelete = useCallback(
    (id?: number | string) => {
      if (!id) return
      const newData = [...problems]
      const index = newData.findIndex((el) => el.id === id)

      newData.splice(index, 1)
      setProblems(newData)
    },
    [problems, setProblems],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

        <Button className="ml-auto" disabled={isOpenNewProblem} onClick={openNewProblem}>
          <PlusIcon className="size-5" />
          {tForecast('form.problems.labels.addProblem')}
        </Button>
      </div>

      {isOpenNewProblem && (
        <ProblemForm onCancel={handleCancel} onSave={handleSubmit} problemData={problemData} />
      )}

      <ProblemList
        isOpenNewProblem={isOpenNewProblem}
        onCancel={handleCancel}
        onDelete={handleDelete}
        onSave={handleSubmit}
        problems={problems}
      />
    </section>
  )
}

export default ProblemsSection
