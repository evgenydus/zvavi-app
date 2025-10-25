import { useTranslations } from 'next-intl'

import EducateSection from './EducateSection'
import FinancialSection from './FinancialSection'
import VolunteerSection from './VolunteerSection'

const PageContent = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-6">
      <p className="text-justify">{t('joinUs.page.description')}</p>
      <VolunteerSection />
      <FinancialSection />
      <EducateSection />
    </div>
  )
}

export default PageContent
