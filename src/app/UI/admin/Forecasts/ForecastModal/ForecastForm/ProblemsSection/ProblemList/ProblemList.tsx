import { type Dispatch, type SetStateAction, useCallback } from 'react'
import { useTranslations } from 'next-intl'

import { ProblemForm, type ProblemFormProps } from '../ProblemForm'
import { ProblemItem } from './ProblemItem'

import type { FormState } from '../../common'
import type { Problem } from '@/business/types'

type ProblemsListProps = {
  formState: FormState
  onDelete: Dispatch<SetStateAction<Problem[]>>
  onFormClose: ProblemFormProps['onClose']
  onFormOpen: (state: { mode: 'edit'; id: string }) => void
  onFormSave: ProblemFormProps['onSave']
  problems: Problem[]
}

const ProblemList = ({
  formState,
  onDelete,
  onFormClose,
  onFormOpen,
  onFormSave,
  problems,
}: ProblemsListProps) => {
  const t = useTranslations()

  const handleEdit = useCallback(
    (id: string) => {
      onFormOpen({ id, mode: 'edit' })
    },
    [onFormOpen],
  )

  const handleDelete = useCallback(
    (id: string) => {
      onDelete(problems.filter((el) => el.id !== id))
    },
    [onDelete, problems],
  )

  if (problems.length === 0 && formState === null) {
    return (
      <p className="text-center text-gray-500">{t('admin.forecast.form.problems.noProblems')}</p>
    )
  }

  return (
    <ul className="space-y-4">
      {problems.map((problem) => (
        <li key={problem.type}>
          {formState?.mode === 'edit' && formState.id === problem.id ? (
            <ProblemForm onClose={onFormClose} onSave={onFormSave} problemData={problem} />
          ) : (
            <ProblemItem
              canEdit={formState === null}
              onDelete={handleDelete}
              onEdit={handleEdit}
              problemData={problem}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default ProblemList
