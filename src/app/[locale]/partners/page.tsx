import { useTranslations } from 'next-intl'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const PartnersPage = () => {
  const t = useTranslations()

  return <PageWrapper title={t('navigation.partners')}>Partners Page</PageWrapper>
}

export default PartnersPage
