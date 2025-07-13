import { useTranslations } from 'next-intl'

import { Textarea } from '@/UI/components/inputs'

type TextAreaFieldProps = {
  value: string
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
  type: 'additionalHazards' | 'snowpack' | 'summary' | 'weather'
}

const TextAreaField = ({ onChange, type, value }: TextAreaFieldProps) => {
  const t = useTranslations()

  return (
    <div className="flex flex-1 flex-col gap-4 pt-1.5">
      <h4 className="font-semibold">{t(`admin.forecast.form.general.labels.${type}`)}</h4>
      <Textarea className="w-full" onChange={onChange} rows={6} value={value} />
    </div>
  )
}

export default TextAreaField
