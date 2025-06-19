import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

import { IconButton } from '@/UI/components'

type ActionButtonsProps = {
  canEdit?: boolean
  onDelete: VoidFunction
  onEdit: VoidFunction
}

const ActionButtons = ({ canEdit = true, onDelete, onEdit }: ActionButtonsProps) => (
  <div className="flex items-center gap-2">
    <IconButton
      className="inline-flex size-7"
      disabled={!canEdit}
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

export default ActionButtons
