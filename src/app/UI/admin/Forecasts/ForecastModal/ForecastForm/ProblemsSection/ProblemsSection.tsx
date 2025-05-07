import _uniqueId from 'lodash/uniqueId'
import { type Dispatch, type SetStateAction, useCallback, useState } from 'react'

import { initialProblemData } from '../constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'
import prepareTimeOfDay from './prepareTimeOfDay'

import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemForm } from './ProblemForm'
import { ProblemList } from './ProblemList'

import type { Problem } from '@/business/types'

type ProblemsSectionProps = {
  problems: Problem[]
  setProblems: Dispatch<SetStateAction<Problem[]>>
}

const ProblemsSection = ({ problems, setProblems }: ProblemsSectionProps) => {
  const tForecast = useTranslations('admin.forecast')

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const [isCreateFormOpen, { setFalse: closeCreateForm, setTrue: openCreateForm }] =
    useBoolean(false)
  const [isEditFormOpen, { setFalse: closeEditForm, setTrue: openEditForm }] = useBoolean(false)
  const [problemIdToEdit, setProblemIdToEdit] = useState('')

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

      setProblemData(initialProblemData)
      closeCreateForm()
    },
    [closeCreateForm, setProblems],
  )

  const handleCancel = useCallback(() => {
    // TODO: Close corresponding form
    closeCreateForm()
    setProblemData(initialProblemData)
  }, [closeCreateForm])

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

  const canOpenForm = !isCreateFormOpen && !isEditFormOpen

  const handleEditFormOpen = useCallback(
    (id: string) => {
      openEditForm()
      setProblemIdToEdit(id)
    },
    [openEditForm],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

        <Button className="ml-auto" disabled={!canOpenForm} onClick={openCreateForm}>
          <PlusIcon className="size-5" />
          {tForecast('form.problems.labels.addProblem')}
        </Button>
      </div>

      {isCreateFormOpen && (
        <ProblemForm onClose={handleCancel} onSave={handleSubmit} problemData={problemData} />
      )}

      <ProblemList
        canOpenEditForm={canOpenForm}
        closeEditForm={closeEditForm}
        isCreateFormOpen={isCreateFormOpen}
        isEditFormOpen={isEditFormOpen}
        onClose={handleCancel}
        onDelete={handleDelete}
        onEditFormOpen={handleEditFormOpen}
        onSave={handleSubmit}
        problemIdToEdit={problemIdToEdit}
        problems={problems}
      />
    </section>
  )
}

export default ProblemsSection
