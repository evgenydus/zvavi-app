import { useTranslations } from 'next-intl'

import { PageWrapper } from '@/UI/containers'
import { PageContent } from '@/UI/partners'

const PartnersPage = () => {
  const t = useTranslations()

  return (
    <PageWrapper title={t('navigation.partners')}>
      <PageContent />
    </PageWrapper>
  )
}

export default PartnersPage
