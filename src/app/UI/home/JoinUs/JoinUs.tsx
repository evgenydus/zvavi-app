import { routes } from '@/UI/header/NavMenu/constants'
import { useTranslations } from 'next-intl'
import classnames from 'classnames'

import { PageSection } from '@/UI/components'
import Link from 'next/link'

const JoinUs = () => {
  const t = useTranslations()

  return (
    <PageSection title={t('joinUs.title')}>
      <div className="flex flex-col gap-4">
        <p>{t('joinUs.section.main.description')}</p>
        <p>{t('joinUs.section.main.description2')}</p>

        <div>
          <Link
            className={classnames(
              'flex items-center gap-1 rounded bg-primary px-3 py-1.5 text-sm text-white transition-colors',
              'focus:outline-none data-[active]:translate-y-px data-[hover]:bg-primary/90',
              'data-[disabled]:cursor-not-allowed data-[disabled]:bg-primary/60',
              'max-w-max data-[focus]:outline-1 data-[focus]:outline-primary/40',
            )}
            href={routes.joinUs}
          >
            {t('joinUs.section.main.learnHowToHelp')}
          </Link>
        </div>
      </div>
    </PageSection>
  )
}

export default JoinUs
