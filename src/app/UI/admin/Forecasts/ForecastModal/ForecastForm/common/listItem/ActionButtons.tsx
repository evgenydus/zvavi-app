import { Pencil, Trash } from 'lucide-react'

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
      iconProps={{ icon: Pencil }}
      onClick={onEdit}
    />

    <IconButton className="inline-flex size-7" iconProps={{ icon: Trash }} onClick={onDelete} />
  </div>
)

export default ActionButtons
