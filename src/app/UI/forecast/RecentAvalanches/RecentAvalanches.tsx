import { useTranslations } from 'next-intl'

import AvalancheItem from './AvalancheItem'
import Spoiler from '@/UI/components/Spoiler'

import type { Avalanche } from '@/business/types'

const RecentAvalanches = ({ avalanches }: { avalanches: Avalanche[] }) => {
  const t = useTranslations()

  return (
    <section>
      {avalanches.length > 0 ? (
        <Spoiler title={t('forecast.sections.recentAvalanches.title')}>
          <ul>
            {avalanches.map((avalanche, index) => (
              <li key={avalanche.id}>
                <AvalancheItem avalanche={avalanche} />
                {index < avalanches.length - 1 && <hr className="my-4 border-gray-300" />}
              </li>
            ))}
          </ul>
        </Spoiler>
      ) : (
        <div className="flex items-center justify-between rounded-2xl bg-black/5 p-4">
          <h4 className="text-sm">{t('forecast.sections.recentAvalanches.title')}</h4>
          <p className="text-center text-xs text-gray-500">
            {t('forecast.sections.recentAvalanches.noAvalanches')}
          </p>
        </div>
      )}
    </section>
  )
}

export default RecentAvalanches
