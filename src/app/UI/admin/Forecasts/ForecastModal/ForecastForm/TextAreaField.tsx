import { useTranslations } from 'next-intl'

import { Textarea } from '@/UI/components/inputs'

import type { ForecastFormData } from '@/business/types'

type TextAreaFieldProps = {
  formData: ForecastFormData
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
  type: 'additionalHazards' | 'snowpack' | 'summary' | 'weather'
}

const TextAreaField = ({ formData, onChange, type }: TextAreaFieldProps) => {
  const t = useTranslations()

  return (
    <div className="flex flex-1 flex-col gap-4 pt-1.5">
      <h4 className="font-semibold">{t(`admin.forecast.form.general.labels.${type}`)}</h4>
      <Textarea className="w-full" onChange={onChange} rows={6} value={formData[type]} />
    </div>
  )
}

export default TextAreaField
