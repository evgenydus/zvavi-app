import { useTranslations } from 'next-intl'

import { SizeScale } from './Icons'
import PropertyTile from './PropertyTile'

import type { Problem } from '@/business/types'

export type ModalContentProps = {
  problem: Problem
}

const ModalContent = ({ problem }: ModalContentProps) => {
  const t = useTranslations()
  const {
    aspects,
    avalancheSize,
    description,
    distribution,
    isAllDay,
    sensitivity,
    timeOfDay,
    trend,
  } = problem

  return (
    <div>
      <p className="mb-4 text-sm">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.size.${avalancheSize}`),
            name: 'size',
          }}
        >
          <div className="relative flex flex-1 items-end justify-end">
            <p className="absolute left-0 top-0 text-3xl font-semibold">D{avalancheSize}</p>
            <SizeScale size={avalancheSize} />
          </div>
        </PropertyTile>

        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.size.${avalancheSize}`),
            name: 'aspects',
          }}
        >
          {Object.entries(aspects).map(([elevation, aspectValues]) => (
            <p key={elevation} className="text-xs">{`${elevation}: ${aspectValues}`}</p>
          ))}
        </PropertyTile>

        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.sensitivity.${sensitivity}`),
            name: 'sensitivity',
          }}
        >
          <p className="font-semibold">
            {t(`admin.forecast.form.problems.options.sensitivityLevel.${sensitivity}`)}
          </p>
        </PropertyTile>

        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.distribution.${distribution}`),
            name: 'distribution',
          }}
        >
          <p className="font-semibold">
            {t(`admin.forecast.form.problems.options.distribution.${distribution}`)}
          </p>
        </PropertyTile>

        <PropertyTile property={{ name: 'trend' }}>
          <p className="font-semibold">
            {t(`admin.forecast.form.problems.options.trend.${trend}`)}
          </p>
        </PropertyTile>

        <PropertyTile property={{ name: 'timeOfDay' }}>
          <p className="font-semibold">
            {isAllDay
              ? t('admin.forecast.form.problems.labels.allDay')
              : `${timeOfDay.start} - ${timeOfDay.end}`}
          </p>
        </PropertyTile>
      </div>
    </div>
  )
}

export default ModalContent
