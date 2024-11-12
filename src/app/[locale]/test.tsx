import { useTranslations } from 'next-intl'

const Test = () => {
  const t = useTranslations('home')

  return <h1>{t('title')}</h1>
}

export default Test
