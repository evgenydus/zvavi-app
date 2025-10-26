import { useTranslations } from 'next-intl'

import { partners } from '@/data/constants/partners'
import { routes } from '@/UI/header/NavMenu/constants'

import { ButtonLink, PageSection } from '@/UI/components'
import PartnerBadge from './PartnerBadge'

const Partners = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('partners.main.title')}>
      <div className="mb-4 flex gap-2 overflow-x-auto scrollbar-hide">
        {partners.map((partner) => {
          if (partner.isHidden) return null

          return <PartnerBadge key={partner.name} partner={partner} />
        })}
      </div>

      <ButtonLink href={routes.partners}>{t('partners.main.seeAllButton')}</ButtonLink>
    </PageSection>
  )
}

export default Partners
