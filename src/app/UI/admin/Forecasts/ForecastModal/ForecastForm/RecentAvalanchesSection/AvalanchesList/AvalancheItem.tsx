import { dateFormat } from '@/business/constants'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { ActionButtons, Aspects, PropertyWrapper } from '../../common/listItem'

import type { Avalanche } from '@/business/types'

const AvalancheItem = ({ avalanche }: { avalanche: Avalanche }) => {
  const tForm = useTranslations('admin.forecast.form')
  const { date, description, size } = avalanche

  return (
    <div className="w-full rounded bg-black/[0.03] p-3">
      <div className="mb-3 flex items-center justify-between">
        {date && <h3 className="text-xl font-semibold">{format(date, dateFormat)}</h3>}
        <ActionButtons />
      </div>

      <div className="flex items-start gap-6">
        <div className="flex-1">
          <PropertyWrapper title={tForm('common.labels.avalancheSize')}>
            <p>{size}</p>
          </PropertyWrapper>
        </div>

        <Aspects className="w-[355px]" item={avalanche} />
      </div>

      {description && (
        <div>
          <h4 className="mb-2 font-semibold">{tForm('common.labels.description')}:</h4>
          <p className="max-h-28 overflow-y-auto text-justify">{description}</p>
        </div>
      )}
    </div>
  )
}

export default AvalancheItem
