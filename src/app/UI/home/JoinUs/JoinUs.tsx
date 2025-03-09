import { routes } from '@/UI/header/NavMenu/constants'
import { useTranslations } from 'next-intl'

import { ButtonLink, PageSection } from '@/UI/components'

const JoinUs = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('joinUs.title')}>
      <div className="flex flex-col gap-4">
        <p>{t('joinUs.section.main.description')}</p>
        <p>{t('joinUs.section.main.description2')}</p>

        <ButtonLink href={routes.joinUs}>{t('joinUs.section.main.learnHowToHelp')}</ButtonLink>
      </div>
    </PageSection>
  )
}

export default JoinUs
