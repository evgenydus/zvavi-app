import { useTranslations } from 'next-intl'

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
      <p>{t('joinUs.page.volunteer.descriptionPost')}</p>
    </section>
  )
}

export default VolunteerSection
