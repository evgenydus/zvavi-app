import { useTranslations } from 'next-intl'
import { Spoiler } from '@/UI/components'

const AdditionalHazards = ({ additionalHazards }: { additionalHazards: string }) => {
  const t = useTranslations()

  return (
    <Spoiler title={t('forecast.sections.additionalHazards.title')}>
      <p>{additionalHazards}</p>
    </Spoiler>
  )
}

export default AdditionalHazards
