import { IconButton } from '@/UI/components'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

type ActionButtonsProps = {
  onEdit?: () => void
  onDelete?: () => void
}

const ActionButtons = ({ onDelete, onEdit }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-3">
      <IconButton
        className="inline-flex size-7"
        icon={<PencilSquareIcon className="size-5 stroke-inherit" />}
        onClick={onEdit}
      />

      <IconButton
        className="inline-flex size-7"
        icon={<TrashIcon className="size-5 stroke-inherit" />}
        onClick={onDelete}
      />
    </div>
  )
}

export default ActionButtons
