import { useTranslations } from 'next-intl'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const Page = () => {
  const t = useTranslations()

  return <PageWrapper title={t('about.title')}>About Us Page</PageWrapper>
}

export default Page
