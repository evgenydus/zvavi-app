import { useTranslations } from 'next-intl'

import type { Problem } from '@/business/types'
import { ProblemItem } from './ProblemItem'

import type { ProblemFormProps } from '../ProblemForm'

type ProblemsListProps = Omit<ProblemFormProps, 'problemData'> & {
  canOpenEditForm: boolean
  closeEditForm: VoidFunction
  isCreateFormOpen: boolean
  isEditFormOpen: boolean
  onDelete: (id: string) => void
  onEditFormOpen: (id: string) => void
  problemIdToEdit: string | null
  problems: Problem[]
}

const ProblemList = ({
  canOpenEditForm,
  closeEditForm,
  isCreateFormOpen,
  isEditFormOpen,
  onDelete,
  onEditFormOpen,
  onSave,
  problemIdToEdit,
  problems,
}: ProblemsListProps) => {
  const t = useTranslations()

  if (problems.length === 0 && !isCreateFormOpen) {
    return (
      <p className="text-center text-gray-500">{t('admin.forecast.form.problems.noProblems')}</p>
    )
  }

  return (
    <ul className="space-y-4">
      {problems.map((problemData) => {
        const problemToEdit = problems.find((problem) => problem.id === problemIdToEdit) || null

        return (
          <li key={problemData.type}>
            <ProblemItem
              canEdit={canOpenEditForm}
              closeEditForm={closeEditForm}
              isEditFormOpen={isEditFormOpen}
              onDelete={onDelete}
              onEditFormOpen={onEditFormOpen}
              onFormSave={onSave}
              problemData={problemData}
              problemToEdit={problemToEdit}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ProblemList
