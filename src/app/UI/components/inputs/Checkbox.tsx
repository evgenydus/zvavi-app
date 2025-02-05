import classnames from 'classnames'
import { CheckIcon } from '@heroicons/react/16/solid'
import { Checkbox as HeadlessUICheckbox, Field, Label } from '@headlessui/react'

type CheckboxProps = {
  className?: string
  isChecked: boolean
  label?: string
  onChange: (checked: boolean) => void
}

const Checkbox = ({ className, isChecked, label, onChange }: CheckboxProps) => (
  <Field className="flex items-center gap-2 flex-none">
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
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </HeadlessUICheckbox>
  </Field>
)

export default Checkbox
