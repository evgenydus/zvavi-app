import { useState } from 'react'
import classnames from 'classnames'
import { Radio, RadioGroup as HeadlessUIRadioGroup } from '@headlessui/react'

type RadioGroupProps = {
  options: { value: string | number; label: string | number }[]
  name: string
}

const RadioGroup = ({ options, name }: RadioGroupProps) => {
  const [selected, setSelected] = useState(options[0]) // TODO: Added for testing

  return (
    <HeadlessUIRadioGroup
      className={classnames('flex items-center rounded bg-black/5 p-1 text-sm dark:bg-white/5')}
      name={name}
      onChange={setSelected}
      value={selected}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          className={classnames(
            'flex min-w-8 cursor-pointer items-center justify-center px-2 py-1 data-[checked]:bg-white/90',
            'rounded transition-colors data-[checked]:text-primary',
          )}
          value={option.value}
        >
          {option.label}
        </Radio>
      ))}
    </HeadlessUIRadioGroup>
  )
}

export default RadioGroup
