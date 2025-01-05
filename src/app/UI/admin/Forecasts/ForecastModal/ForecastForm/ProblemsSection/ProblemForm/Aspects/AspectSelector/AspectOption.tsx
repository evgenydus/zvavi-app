import { useCallback } from 'react'
import classnames from 'classnames'
import type { Option } from '@/UI/components/inputs'

type AspectOptionProps = {
  option: Option
  onChange: (value: Option[]) => void
  selectedOptions: Option[]
}

const AspectOption = ({ onChange, option, selectedOptions }: AspectOptionProps) => {
  const isSelected = selectedOptions.includes(option)

  const handleToggle = useCallback(() => {
    const updatedOptions = isSelected
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option]

    onChange(updatedOptions)
  }, [isSelected, onChange, option, selectedOptions])

  return (
    <button
      className={classnames(
        'flex size-7 items-center justify-center rounded text-gray-900 outline-none transition ',
        isSelected ? 'bg-white/90' : 'hover:bg-black/[0.03]',
      )}
      onClick={handleToggle}
      type="button"
    >
      <span className={classnames({ 'text-primary': isSelected })}>{option.label}</span>
    </button>
  )
}

export default AspectOption
