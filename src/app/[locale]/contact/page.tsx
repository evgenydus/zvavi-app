import { useTranslations } from 'next-intl'

import { PageContent } from '@/UI/contact'
import { PageWrapper } from '@/UI/containers'

const ContactPage = () => {
  const t = useTranslations()

  return (
    <PageWrapper title={t('navigation.contact')}>
      <PageContent />
    </PageWrapper>
  )
}

export default ContactPage
