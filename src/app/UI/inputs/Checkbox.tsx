import classnames from 'classnames'
import { CheckIcon } from '@heroicons/react/16/solid'
import { Checkbox as HeadlessUICheckbox, Label } from '@headlessui/react'

type CheckboxProps = {
  className?: string
  onChange: (checked: boolean) => void
  label?: string
}

const Checkbox = ({ onChange, className, label }: CheckboxProps) => (
  <div className="flex items-center gap-2">
    {label && <Label className="cursor-pointer">{label}</Label>}

    <HeadlessUICheckbox
      className={classnames(
        'group size-5 cursor-pointer rounded-md bg-white p-0.5 ring-1',
        'ring-inset ring-white/15 data-[hover]:ring-primary',
        'transition-[background-color,box-shadow] data-[checked]:bg-primary',
        className,
      )}
      onChange={onChange}
    >
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </HeadlessUICheckbox>
  </div>
)

export default Checkbox
