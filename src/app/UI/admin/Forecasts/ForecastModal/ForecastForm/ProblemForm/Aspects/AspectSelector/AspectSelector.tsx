import { useCallback, useState } from 'react'
import { aspects } from '@/business/constants'

import AspectOption from './AspectOption'

import type { Option } from '@/UI/components/inputs'

const aspectOptions = Object.entries(aspects).map(([value, label]) => ({ label, value }))

const AspectSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleChange = useCallback((updatedOptions: Option[]) => {
    setSelectedOptions(updatedOptions)
  }, [])

  return (
    <div className="inline-flex items-center gap-1 rounded bg-black/5 p-1 text-sm dark:bg-white/5">
      {aspectOptions.map((option) => (
        <AspectOption
          key={option.value}
          onChange={handleChange}
          option={option}
          selectedOptions={selectedOptions}
        />
      ))}
    </div>
  )
}

export default AspectSelector
