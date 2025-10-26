import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { partners } from '@/data/constants/partners'

import { Icon } from '@/UI/components'

const PartnersList = () => {
  const t = useTranslations()

  return (
    <div className="space-y-6">
      {partners.map((partner) => {
        const { id, infoKey, isHidden, logo, name, url } = partner

        if (isHidden) return null

        return (
          <div
            key={id}
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
                  className="mt-2 inline-flex items-center gap-1 font-medium text-primary transition hover:underline"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t('common.actions.visitWebsite')}</span>
                  <Icon icon="externalLink" size="sm" />
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
