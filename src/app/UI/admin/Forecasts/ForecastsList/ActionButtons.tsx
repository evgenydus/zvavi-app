import { IconButton } from '@/UI/components'

import { EyeIcon, EyeOffIcon, PencilIcon, TrashIcon } from '@/UI/icons'

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
      iconProps={{ icon: isPublished ? EyeOffIcon : EyeIcon }}
      onClick={onStatusToggle}
    />
    <IconButton className="inline-flex size-7" iconProps={{ icon: PencilIcon }} onClick={onEdit} />
    <IconButton className="inline-flex size-7" iconProps={{ icon: TrashIcon }} onClick={onDelete} />
  </div>
)

export default ActionButtons
