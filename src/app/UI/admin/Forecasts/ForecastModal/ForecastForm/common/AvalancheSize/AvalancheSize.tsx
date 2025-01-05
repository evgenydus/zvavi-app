import { useProblemOptions } from '../hooks'
import { useTranslations } from 'next-intl'

import { RadioGroup } from '@/UI/components/inputs'
import InputBlock from '../InputBlock'

import type { AvalancheSize as AvalancheSizeType } from '@/business/types'

type AvalancheSizeProps = {
  onChange: (value: AvalancheSizeType) => void
  value: number
}

const AvalancheSize = ({ onChange, value }: AvalancheSizeProps) => {
  const tForecastCommon = useTranslations('admin.forecast.form.common')
  const { avalancheSizeOptions } = useProblemOptions()

  return (
    <InputBlock label={tForecastCommon('labels.avalancheSize')} labelClassName="w-32">
      <RadioGroup
        onChange={onChange as (size: string | number) => void}
        options={avalancheSizeOptions}
        value={value}
      />
    </InputBlock>
  )
}

export default AvalancheSize
