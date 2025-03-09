import { PageWrapper } from '@/UI/containers/PageWrapper'
import { useTranslations } from 'next-intl'

const JoinUsPage = () => {
  const t = useTranslations()

  return <PageWrapper title={t('navigation.joinUs')}>Join Us Page</PageWrapper>
}

export default JoinUsPage
