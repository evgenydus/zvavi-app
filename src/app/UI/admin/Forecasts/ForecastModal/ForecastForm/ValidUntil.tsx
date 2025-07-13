import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

import { DatePicker } from '@/UI/components/inputs'
import { InputBlock } from './common'

import type { ForecastFormData } from '@/business/types'

type ValidUntilProps = {
  value: Date | null
  setFormData: (value: React.SetStateAction<ForecastFormData>) => void
}

const ValidUntil = ({ setFormData, value }: ValidUntilProps) => {
  const tForecast = useTranslations('admin.forecast')

  const handleValidUntilChange = useCallback(
    (validUntil: Date | null) => {
      setFormData((prev) => ({
        ...prev,
        validUntil,
      }))
    },
    [setFormData],
  )

  return (
    <InputBlock label={tForecast('form.general.labels.validUntil')}>
      <DatePicker
        className="h-8 rounded bg-black/5 px-2"
        dateFormat="dd.MM.yyyy HH:mm"
        onChange={handleValidUntilChange}
        selected={value}
        showTimeSelect
      />
    </InputBlock>
  )
}

export default ValidUntil
