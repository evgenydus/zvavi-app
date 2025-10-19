import { useTranslations } from 'next-intl'

import {
  AspectRose,
  DistributionIcon,
  SensitivityGauge,
  SizeScale,
  TimeOfDay,
  Trend,
} from './Icons'
import PropertyTile from './PropertyTile'

import type { Problem } from '@/business/types'

const ProblemDetails = ({ problem }: { problem: Problem }) => {
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
      {description && <p className="mb-4 text-justify text-sm">{description}</p>}
      <div className="grid grid-cols-2 justify-items-center gap-2">
        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.size.${avalancheSize}`),
            name: 'size',
          }}
        >
          <div className="relative flex flex-1 items-end justify-end">
            <p className="absolute left-0 top-0 text-3xl font-semibold">{avalancheSize}</p>
            <SizeScale size={avalancheSize} />
          </div>
        </PropertyTile>

        <PropertyTile
          property={{
            info: t('forecast.sections.avalancheProblems.modal.info.aspects'),
            name: 'aspects',
          }}
        >
          <AspectRose selectedAspects={aspects} />
        </PropertyTile>

        <PropertyTile
          property={{
            info: t(`forecast.sections.avalancheProblems.modal.info.sensitivity.${sensitivity}`),
            name: 'sensitivity',
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <p className="font-semibold">
              {t(`admin.forecast.form.problems.options.sensitivityLevel.${sensitivity}`)}
            </p>
            <SensitivityGauge
              className="ml-auto w-24"
              diameter={85}
              strokeWidth={14}
              value={sensitivity}
            />
          </div>
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

          <div className="ml-auto">
            <DistributionIcon distribution={distribution} />
          </div>
        </PropertyTile>

        <PropertyTile property={{ name: 'trend' }}>
          <p className="font-semibold">
            {t(`admin.forecast.form.problems.options.trend.${trend}`)}
          </p>
          <div className="ml-auto">
            <Trend value={trend} />
          </div>
        </PropertyTile>

        <PropertyTile property={{ name: 'timeOfDay' }}>
          <TimeOfDay isAllDay={isAllDay} timeOfDay={timeOfDay} />
        </PropertyTile>
      </div>
    </div>
  )
}

export default ProblemDetails
