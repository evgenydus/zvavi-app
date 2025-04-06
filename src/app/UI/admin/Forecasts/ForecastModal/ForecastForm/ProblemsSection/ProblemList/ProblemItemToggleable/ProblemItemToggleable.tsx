import { ProblemItemEdit } from '../ProblemItemEdit'
import { ProblemItemView } from '../ProblemItemView'
import { useBoolean } from '@/UI/hooks'

import type { ProblemFormProps } from '../ProblemItemEdit/ProblemItemEdit'
import type { Problem } from '@/business/types'

type ProblemItemProps = {
  problemData: Problem
  onDelete: () => void
  editProps: Omit<ProblemFormProps, 'problemData' | 'onCloseEditMode'> & { index: number }
}

export const ProblemItemToggleable = ({ editProps, onDelete, problemData }: ProblemItemProps) => {
  const [isEditing, { setFalse: onCloseEditMode, setTrue: onOpenEditMode }] = useBoolean(false)

  const handleCancel = () => {
    editProps.onCancel()
    onCloseEditMode()
  }

  return isEditing ? (
    <ProblemItemEdit problemData={problemData} {...editProps} onCancel={handleCancel} />
  ) : (
    <ProblemItemView onDelete={onDelete} onEdit={onOpenEditMode} problemData={problemData} />
  )
}
