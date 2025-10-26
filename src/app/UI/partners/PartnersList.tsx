import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { partners } from '@/data/constants/partners'

const PartnersList = () => {
  const t = useTranslations()

  return (
    <div className="space-y-6">
      {partners.map((partner) => {
        const { infoKey, isHidden, logo, name, url } = partner

        if (isHidden) return null

        return (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-4 rounded-2xl border bg-gray-100 p-4 sm:flex-row sm:items-start sm:gap-6"
          >
            <div className="flex w-40 items-center justify-center">
              <Image alt={name} className="max-w-[160px]" height={96} id={name} src={logo} />
            </div>
            <div className="text-center sm:flex-1 sm:text-left">
              <h4 className="font-semibold">{name}</h4>
              {infoKey && <p className="mt-1 text-sm text-gray-700">{t(infoKey)}</p>}
              {url && (
                <a
                  className="mt-2 inline-block font-medium text-primary transition hover:underline"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t('common.actions.visitWebsite')} →
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PartnersList
