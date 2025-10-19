import { Checkbox as HeadlessUICheckbox, Field, Label } from '@headlessui/react'
import classnames from 'classnames'

import { CheckIcon } from '@/UI/icons'

type CheckboxProps = {
  className?: string
  isChecked: boolean
  label?: string
  onChange: (checked: boolean) => void
}

const Checkbox = ({ className, isChecked, label, onChange }: CheckboxProps) => (
  <Field className="flex flex-none items-center gap-2">
    {label && <Label className="cursor-pointer">{label}</Label>}

    <HeadlessUICheckbox
      checked={isChecked}
      className={classnames(
        'group size-5 cursor-pointer rounded-md p-0.5 ring-1',
        'ring-inset ring-white/15 data-[hover]:ring-primary',
        'transition-[background-color,box-shadow] data-[checked]:bg-primary',
        { 'bg-white': !className?.includes('bg-') },
        className,
      )}
      onChange={onChange}
    >
      <CheckIcon className="hidden stroke-white group-data-[checked]:block" size={16} />
    </HeadlessUICheckbox>
  </Field>
)

export default Checkbox
