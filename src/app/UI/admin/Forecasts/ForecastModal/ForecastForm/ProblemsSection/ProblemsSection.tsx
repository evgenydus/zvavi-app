import { type Dispatch, type SetStateAction, useCallback, useState } from 'react'

import { initialProblemData } from '../constants'
import { useTranslations } from 'next-intl'
import _uniqueId from 'lodash/uniqueId'
import prepareTimeOfDay from './prepareTimeOfDay'

import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemForm } from './ProblemForm'
import { ProblemList } from './ProblemList'

import type { Problem } from '@/business/types'
import type { FormState } from '../common'

type ProblemsSectionProps = {
  problems: Problem[]
  setProblems: Dispatch<SetStateAction<Problem[]>>
}

const ProblemsSection = ({ problems, setProblems }: ProblemsSectionProps) => {
  const tForecast = useTranslations('admin.forecast')
  const [formState, setFormState] = useState<FormState>(null)

  const handleCreateFormOpen = useCallback(() => {
    setFormState({ mode: 'create' })
  }, [])

  const handleFormClose = useCallback(() => {
    setFormState(null)
  }, [])

  const handleSubmit = useCallback(
    (data: Problem) => {
      const preparedProblem: Problem = {
        id: data.id || _uniqueId('problem-'),
        ...data,
        timeOfDay: prepareTimeOfDay(data.timeOfDay),
      }

      setProblems((prev) => {
        const isProblemExists = prev.some((problem) => problem.id === data.id)

        if (isProblemExists) {
          return prev.map((problem) => (problem.id === data.id ? preparedProblem : problem))
        }

        return [...prev, preparedProblem]
      })

      handleFormClose()
    },
    [handleFormClose, setProblems],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

        <Button className="ml-auto" disabled={formState !== null} onClick={handleCreateFormOpen}>
          <PlusIcon className="size-5" />
          {tForecast('form.problems.labels.addProblem')}
        </Button>
      </div>

      {formState?.mode === 'create' && (
        <ProblemForm
          onClose={handleFormClose}
          onSave={handleSubmit}
          problemData={initialProblemData}
        />
      )}

      <ProblemList
        formState={formState}
        onDelete={setProblems}
        onFormClose={handleFormClose}
        onFormOpen={setFormState}
        onFormSave={handleSubmit}
        problems={problems}
      />
    </section>
  )
}

export default ProblemsSection
