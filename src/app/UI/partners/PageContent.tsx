import { useTranslations } from 'next-intl'

import PartnersList from '@/UI/partners/PartnersList'

const PageContent = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-6">
      <p>{t('partners.description')}</p>
      <PartnersList />
    </div>
  )
}

export default PageContent
