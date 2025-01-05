import { useTranslations } from 'next-intl'
import _uniqueId from 'lodash/uniqueId'

import AvalancheItem from './AvalancheItem'

import type { Avalanche } from '@/business/types'

type AvalanchesListProps = {
  avalanches: Avalanche[]
  isAdding: boolean
}

const AvalanchesList = ({ avalanches, isAdding }: AvalanchesListProps) => {
  const t = useTranslations()

  if (avalanches.length === 0 && !isAdding) {
    return (
      <p className="text-center text-gray-500">
        {t('admin.forecast.form.recentAvalanches.noAvalanches')}
      </p>
    )
  }

  return (
    <ul className="space-y-4">
      {avalanches.map((avalanche) => (
        <li key={_uniqueId('avalanche-')}>
          <AvalancheItem avalanche={avalanche} />
        </li>
      ))}
    </ul>
  )
}

export default AvalanchesList
