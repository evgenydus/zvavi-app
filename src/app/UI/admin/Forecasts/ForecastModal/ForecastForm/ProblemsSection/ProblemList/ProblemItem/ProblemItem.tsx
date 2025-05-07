import { ProblemItemView } from './ProblemItemView'
import { ProblemForm } from '../../ProblemForm'

import type { ProblemFormProps } from '../../ProblemForm'
import type { Problem } from '@/business/types'

type ProblemItemProps = {
  canEdit: boolean
  closeEditForm: ProblemFormProps['onClose']
  isEditFormOpen: boolean
  onDelete: (id: string) => void
  onEditFormOpen: (id: string) => void
  onFormSave: ProblemFormProps['onSave']
  problemData: Problem
  problemToEdit: ProblemFormProps['problemData'] | null
}

const ProblemItem = ({
  canEdit,
  closeEditForm,
  isEditFormOpen,
  onDelete,
  onEditFormOpen,
  onFormSave,
  problemData,
  problemToEdit,
}: ProblemItemProps) => {
  const isEditMode = problemToEdit && problemToEdit.id === problemData.id && isEditFormOpen

  if (isEditMode) {
    return <ProblemForm onClose={closeEditForm} onSave={onFormSave} problemData={problemToEdit} />
  }

  return (
    <ProblemItemView
      canEdit={canEdit}
      onDelete={onDelete}
      onEdit={onEditFormOpen}
      problemData={problemData}
    />
  )
}

export default ProblemItem
