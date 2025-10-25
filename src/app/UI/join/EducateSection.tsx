import { useTranslations } from 'next-intl'

const EducateSection = () => {
  const t = useTranslations()

  return (
    <section className="space-y-3">
      <h3 className="text-xl font-semibold">{t('joinUs.page.educate.title')}</h3>
      <div>
        <p className="text-justify">{t('joinUs.page.educate.descriptionPre')}</p>
        <ul className="mt-2 list-disc pl-4">
          {t
            .raw('joinUs.page.educate.options')
            ?.map((option: string) => <li key={option}>{option}</li>)}
        </ul>
      </div>
      <p className="text-justify">{t('joinUs.page.educate.descriptionPost')}</p>
    </section>
  )
}

export default EducateSection
