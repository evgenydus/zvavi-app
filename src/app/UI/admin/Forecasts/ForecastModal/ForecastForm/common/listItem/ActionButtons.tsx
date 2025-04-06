// TODO: Implement Icon Buttons https://app.asana.com/0/1208747689500826/1209084695587066/f

type ActionButtonsProps = {
  onEdit?: () => void
  onDelete?: () => void
}

const ActionButtons = ({ onDelete, onEdit }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-3">
      <button className="text-primary" onClick={onEdit} type="button">
        Edit
      </button>
      <button className="text-red-500" onClick={onDelete} type="button">
        Delete
      </button>
    </div>
  )
}

export default ActionButtons
