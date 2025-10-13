import { EyeIcon, EyeSlashIcon, TrashIcon } from '@heroicons/react/24/outline'

import { IconButton } from '@/UI/components'

type ActionButtonsProps = {
  isPublished: boolean
  onDelete: VoidFunction
  onStatusToggle: VoidFunction
}

const ActionButtons = ({ isPublished, onDelete, onStatusToggle }: ActionButtonsProps) => (
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
      icon={<TrashIcon className="size-5 stroke-inherit" />}
      onClick={onDelete}
    />
  </div>
)

export default ActionButtons
