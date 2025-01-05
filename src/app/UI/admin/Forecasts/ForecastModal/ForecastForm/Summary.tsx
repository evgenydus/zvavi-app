import { useTranslations } from 'next-intl'
import { Textarea } from '@/UI/components/inputs'
import type { ForecastFormData } from '@/business/types'

type SummaryProps = {
  formData: ForecastFormData
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Summary = ({ formData, onChange }: SummaryProps) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-4 pt-1.5">
      <h4 className="w-32 font-semibold">{t('admin.forecast.form.general.labels.summary')}</h4>
      <Textarea className="w-full" onChange={onChange} rows={6} value={formData.summary} />
    </div>
  )
}

export default Summary
