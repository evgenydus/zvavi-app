import { IconButton } from '@/UI/components'

import { PencilIcon, TrashIcon } from '@/UI/icons'

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
      iconProps={{ icon: PencilIcon }}
      onClick={onEdit}
    />

    <IconButton className="inline-flex size-7" iconProps={{ icon: TrashIcon }} onClick={onDelete} />
  </div>
)

export default ActionButtons
