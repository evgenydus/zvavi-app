import { useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'

import { ButtonLink, PageSection } from '@/UI/components'

const JoinUs = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('joinUs.main.title')}>
      <div className="flex flex-col gap-4">
        <p>{t('joinUs.main.section.description')}</p>
        <p>{t('joinUs.main.section.description2')}</p>

        <ButtonLink href={routes.joinUs}>{t('joinUs.main.section.learnHowToHelp')}</ButtonLink>
      </div>
    </PageSection>
  )
}

export default JoinUs
