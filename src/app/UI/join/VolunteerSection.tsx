import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { links } from '@/UI/constants'
import { routes } from '@/UI/header/NavMenu/constants'

import { HTMLContainer } from '@/UI/components'

const VolunteerSection = () => {
  const t = useTranslations()

  return (
    <section className="space-y-3">
      <h3 className="text-xl font-semibold">{t('joinUs.page.volunteer.title')}</h3>
      <div>
        <p className="text-justify">{t('joinUs.page.volunteer.descriptionPre')}</p>
        <ul className="mt-2 list-disc pl-4">
          {t
            .raw('joinUs.page.volunteer.options')
            ?.map((option: string) => <li key={option}>{option}</li>)}
        </ul>
      </div>

      <div>
        <span className="text-justify">{t('joinUs.page.volunteer.descriptionPost')}</span>
        <Link className="text-primary underline" href={routes.contact}>
          {t('common.actions.seeContactPage')}
        </Link>
      </div>

      <HTMLContainer
        component="p"
        content={t.rich('joinUs.page.volunteer.becomeAMember', {
          a: (chunks) =>
            `<a class="text-primary underline" href="${links.memberForm}" rel="noreferrer" target="_blank">${chunks}</a>`,
        })}
      />
    </section>
  )
}

export default VolunteerSection
