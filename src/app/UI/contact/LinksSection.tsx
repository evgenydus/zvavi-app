import { useTranslations } from 'next-intl'

import { links } from '@/UI/constants'

const contactOptions = {
  email: { href: `mailto:${links.email}`, labelKey: 'contact.links.email' },
  facebook: { href: links.facebook, labelKey: 'contact.links.facebook' },
  instagram: { href: links.instagram, labelKey: 'contact.links.instagram' },
}

const LinksSection = () => {
  const t = useTranslations()

  return (
    <section>
      <h4 className="mb-2 text-lg font-semibold">{t('contact.title')}</h4>
      <p className="mb-3 whitespace-pre-line text-justify">{t('contact.description')}</p>

      <ul>
        {Object.values(contactOptions).map(({ href, labelKey }) => (
          <li key={labelKey} className="mb-1">
            <a className="underline" href={href} rel="noreferrer" target="_blank">
              {t(labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LinksSection
