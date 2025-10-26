import { useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'

import { ButtonLink } from '@/UI/components'

import PartnersList from '@/UI/partners/PartnersList'

const PageContent = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-6">
      <p>{t('partners.description')}</p>
      <PartnersList />

      <hr />

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">{t('partners.becomePartner.title')}</h3>
        <p className="text-justify">{t('partners.becomePartner.description')}</p>

        <ButtonLink href={routes.contact}>{t('common.actions.getInTouch')}</ButtonLink>
      </section>
    </div>
  )
}

export default PageContent
