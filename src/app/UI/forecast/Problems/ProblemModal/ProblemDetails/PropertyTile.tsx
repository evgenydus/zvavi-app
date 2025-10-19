import { useTranslations } from 'next-intl'

import { InfoIcon } from '@/UI/icons'

type PropertyTileProps = {
  children: React.ReactNode
  property: { name: string; info?: string }
}

const PropertyTile = ({ children, property }: PropertyTileProps) => {
  const t = useTranslations()
  const { info, name } = property

  return (
    <div className="flex h-32 w-full max-w-36 flex-col gap-2 rounded-lg border-2 bg-gray-100 p-2">
      <div className="flex justify-between">
        <h5 className="text-xs text-gray-500">
          {t(`forecast.sections.avalancheProblems.modal.labels.${name}`)}
        </h5>
        {/* TODO: Add info tooltip */}
        {info && <InfoIcon className="stroke-gray-400" size={16} />}
      </div>
      {children}
    </div>
  )
}

export default PropertyTile
