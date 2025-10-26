import { useTranslations } from 'next-intl'

import { bankDetailsGEL, bankDetailsUSDEUR } from '@/UI/constants'

const BankRequisitesSection = () => {
  const t = useTranslations()

  return (
    <section className="space-y-3">
      <h4 className="text-lg font-semibold">{t('contact.bank.title')}</h4>
      <div className="mb-2">
        <p className="mb-1">{t('contact.bank.GEL')}</p>
        <div className="rounded bg-slate-800 px-3 py-2 text-white">
          <p>{`${t('contact.bank.labels.code')}: ${bankDetailsGEL.code}`}</p>
          <p>{`${t('contact.bank.labels.name')}: ${bankDetailsGEL.name}`}</p>
          <p>{`${t('contact.bank.labels.account')}: ${bankDetailsGEL.account}`}</p>
        </div>
      </div>
      <div>
        <p className="mb-1">{t('contact.bank.USDEUR')}</p>
        <div className="rounded bg-slate-800 px-3 py-2 text-white">
          <p>{`${t('contact.bank.labels.swift')}: ${bankDetailsUSDEUR.code}`}</p>
          <p>{`${t('contact.bank.labels.account')}: ${bankDetailsUSDEUR.account}`}</p>
          <p>{`${t('contact.bank.labels.address')}: ${bankDetailsUSDEUR.address}`}</p>
        </div>
      </div>
    </section>
  )
}

export default BankRequisitesSection
