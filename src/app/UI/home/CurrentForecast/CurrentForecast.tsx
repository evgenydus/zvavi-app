import { useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'

import { ButtonLink, Spoiler } from '@/UI/components'
import { HazardLevelBanner } from '@/UI/components/HazardLevelBanner'

import type { Forecast } from '@/business/types'

const CurrentForecast = ({ forecast }: { forecast: Forecast }) => {
  const { id, summary } = forecast
  const t = useTranslations()

  return (
    <section className="space-y-4">
      <HazardLevelBanner forecast={forecast} />
      <Spoiler isInitiallyOpen title={t('common.labels.summary')}>
        {summary}
      </Spoiler>
      <ButtonLink href={`${routes.forecasts}/${id}`}>
        {t('common.actions.readFullForecast')}
      </ButtonLink>
    </section>
  )
}

export default CurrentForecast
