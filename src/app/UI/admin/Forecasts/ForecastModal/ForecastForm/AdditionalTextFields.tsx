import TextAreaField from './TextAreaField'

import type { ForecastFormData } from '@/business/types'

type AdditionalTextFieldsProps = {
  formData: ForecastFormData
  onChange: (
    fieldName: keyof ForecastFormData,
  ) => (value: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const AdditionalTextFields = ({ formData, onChange }: AdditionalTextFieldsProps) => {
  return (
    <>
      <div className="flex items-center gap-6">
        <TextAreaField onChange={onChange('snowpack')} type="snowpack" value={formData.snowpack} />
        <TextAreaField onChange={onChange('weather')} type="weather" value={formData.weather} />
      </div>
      <TextAreaField
        onChange={onChange('additionalHazards')}
        type="additionalHazards"
        value={formData.additionalHazards}
      />
    </>
  )
}

export default AdditionalTextFields
