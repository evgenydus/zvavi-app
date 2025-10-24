import { useTranslations } from 'next-intl'

import { patreonURL, wiseURL } from '@/UI/constants'

import { HTMLContainer } from '@/UI/components'

const FinancialSection = () => {
  const t = useTranslations()

  return (
    <section className="space-y-3">
      <h3 className="text-xl font-semibold">{t('joinUs.page.financialSupport.title')}</h3>
      <div>
        <p className="text-justify">{t('joinUs.page.financialSupport.description')}</p>
        <ul className="mt-2 list-disc pl-4">
          <HTMLContainer
            component="li"
            content={t.rich('joinUs.page.financialSupport.options.patreon', {
              a: (chunks) =>
                `<a class="text-primary underline" href="${patreonURL}" rel="noreferrer" target="_blank">${chunks}</a>`,
            })}
          />
          <HTMLContainer
            component="li"
            content={t.rich('joinUs.page.financialSupport.options.wise', {
              a: (chunks) =>
                `<a class="text-primary underline" href="${wiseURL}" rel="noreferrer" target="_blank">${chunks}</a>`,
            })}
          />
        </ul>
      </div>
    </section>
  )
}

export default FinancialSection
