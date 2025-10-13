import { EyeIcon, EyeSlashIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

import { IconButton } from '@/UI/components'

type ActionButtonsProps = {
  isPublished: boolean
  onDelete: VoidFunction
  onEdit: VoidFunction
  onStatusToggle: VoidFunction
}

const ActionButtons = ({ isPublished, onDelete, onEdit, onStatusToggle }: ActionButtonsProps) => (
  <div className="flex items-center justify-end gap-2">
    <IconButton
      className="inline-flex size-7"
      icon={
        isPublished ? (
          <EyeSlashIcon className="size-5 stroke-inherit" />
        ) : (
          <EyeIcon className="size-5 stroke-inherit" />
        )
      }
      onClick={onStatusToggle}
    />

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

export default ActionButtons
