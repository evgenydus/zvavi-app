import { ProblemItemView } from './ProblemItemView'
import { ProblemForm } from '../../ProblemForm'
import { useBoolean } from '@/UI/hooks'

import type { ProblemFormProps } from '../../ProblemForm'

type ProblemItemProps = ProblemFormProps & {
  onDelete: () => void
}

const ProblemItem = ({ onCancel, onDelete, onSave, problemData }: ProblemItemProps) => {
  const [isEditMode, { setFalse: closeEditMode, setTrue: openEditMode }] = useBoolean(false)

  const handleCancel = () => {
    onCancel()
    closeEditMode()
  }

  if (isEditMode) {
    return <ProblemForm onCancel={handleCancel} onSave={onSave} problemData={problemData} />
  }

  return <ProblemItemView onDelete={onDelete} onEdit={openEditMode} problemData={problemData} />
}

export default ProblemItem
