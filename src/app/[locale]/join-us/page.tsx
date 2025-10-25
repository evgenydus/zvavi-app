import { useTranslations } from 'next-intl'

import { PageWrapper } from '@/UI/containers'
import { PageContent } from '@/UI/join'

const JoinUsPage = () => {
  const t = useTranslations()

  return (
    <PageWrapper title={t('navigation.joinUs')}>
      <PageContent />
    </PageWrapper>
  )
}

export default JoinUsPage
