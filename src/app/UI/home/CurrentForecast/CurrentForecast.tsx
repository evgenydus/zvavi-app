import { routes } from '@/UI/header/NavMenu/constants'
import { useTranslations } from 'next-intl'

import { ButtonLink } from '@/UI/components'
import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'
import Summary from './Summary'

import type { Forecast } from '@/business/types'

const CurrentForecast = ({ forecast }: { forecast: Forecast }) => {
  const { hazardLevels, id, summary } = forecast
  const t = useTranslations()

  return (
    <section className="space-y-4">
      <HazardLevelBanner hazardLevel={hazardLevels.overall} />
      <Summary summary={summary} />
      <ButtonLink href={`${routes.forecasts}/${id}`}>
        {t('common.actions.readFullForecast')}
      </ButtonLink>
    </section>
  )
}

export default CurrentForecast
