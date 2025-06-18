import { useTranslations } from 'next-intl'

import { Spoiler } from '@/UI/components'

const Weather = ({ weather }: { weather: string }) => {
  const t = useTranslations()

  return (
    <Spoiler title={t('forecast.sections.weather.title')}>
      <p>{weather}</p>
    </Spoiler>
  )
}

export default Weather
