import { useTranslations } from 'next-intl'
import { Textarea } from '@/UI/components/inputs'
import type { ForecastFormData } from '@/business/types'

type SummaryProps = {
  formData: ForecastFormData
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
  type: 'otherHazards' | 'snowpack' | 'summary' | 'weather'
}

const TextAreaField = ({ formData, onChange, type }: SummaryProps) => {
  const t = useTranslations()

  return (
    <div className="flex flex-1 flex-col gap-4 pt-1.5">
      <h4 className="w-32 font-semibold">{t(`admin.forecast.form.general.labels.${type}`)}</h4>
      <Textarea className="w-full" onChange={onChange} rows={6} value={formData[type]} />
    </div>
  )
}

export default TextAreaField
