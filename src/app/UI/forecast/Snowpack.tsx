import { useTranslations } from 'next-intl'
import { Spoiler } from '@/UI/components'

const Snowpack = ({ snowpack }: { snowpack: string }) => {
  const t = useTranslations()

  return (
    <Spoiler title={t('forecast.sections.snowpack.title')}>
      <p>{snowpack}</p>
    </Spoiler>
  )
}

export default Snowpack
