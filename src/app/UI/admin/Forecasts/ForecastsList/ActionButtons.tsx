import { Eye, EyeOff, Pencil, Trash } from 'lucide-react'

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
      iconProps={{ icon: isPublished ? EyeOff : Eye }}
      onClick={onStatusToggle}
    />
    <IconButton className="inline-flex size-7" iconProps={{ icon: Pencil }} onClick={onEdit} />
    <IconButton className="inline-flex size-7" iconProps={{ icon: Trash }} onClick={onDelete} />
  </div>
)

export default ActionButtons
