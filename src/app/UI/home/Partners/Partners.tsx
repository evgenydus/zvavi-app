import { partners } from '@/data/constants/partners'
import { useTranslations } from 'next-intl'
import PartnerBadge from '@/UI/home/Partners/PartnerBadge'

const Partners = () => {
  const t = useTranslations()

  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">{t('partners.title')}</h2>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {partners.map((partner) => (
          <PartnerBadge key={partner.name} partner={partner} />
        ))}
      </div>
    </section>
  )
}

export default Partners
