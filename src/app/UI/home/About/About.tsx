import { useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'

import { ButtonLink, PageSection } from '@/UI/components'

const About = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('about.title')}>
      <div className="flex flex-col gap-4">
        <p>{t('about.section.main.description')}</p>

        <ButtonLink href={routes.about}>{t('common.actions.learnMore')}</ButtonLink>
      </div>
    </PageSection>
  )
}

export default About
