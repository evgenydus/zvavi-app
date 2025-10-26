import { useTranslations } from 'next-intl'

import { partners } from '@/data/constants/partners'

import { PageSection } from '@/UI/components'

import PartnerBadge from '@/UI/home/Partners/PartnerBadge'

const Partners = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('partners.main.title')}>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {partners.map((partner) => {
          if (partner.isHidden) return null

          return <PartnerBadge key={partner.name} partner={partner} />
        })}
      </div>
    </PageSection>
  )
}

export default Partners
