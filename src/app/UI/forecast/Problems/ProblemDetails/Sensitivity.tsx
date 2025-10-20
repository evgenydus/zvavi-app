import { useTranslations } from 'next-intl'

import { SensitivityGauge } from './icons'
import PropertyTile from './PropertyTile'

import type { Sensitivity } from '@/business/types'

const Sensitivity = ({ sensitivity }: { sensitivity: Sensitivity }) => {
  const t = useTranslations()

  return (
    <PropertyTile
      property={{
        info: t(`forecast.sections.avalancheProblems.modal.info.sensitivity.${sensitivity}`),
        name: 'sensitivity',
        value: t(`admin.forecast.form.problems.options.sensitivityLevel.${sensitivity}`),
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <p className="font-semibold">
          {t(`admin.forecast.form.problems.options.sensitivityLevel.${sensitivity}`)}
        </p>
        <SensitivityGauge
          className="ml-auto w-28"
          diameter={85}
          strokeWidth={14}
          value={sensitivity}
        />
      </div>
    </PropertyTile>
  )
}

export default Sensitivity
