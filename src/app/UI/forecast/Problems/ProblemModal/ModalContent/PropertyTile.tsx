import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

type PropertyTileProps = {
  children: React.ReactNode
  property: { name: string; info?: string }
}

const PropertyTile = ({ children, property }: PropertyTileProps) => {
  const t = useTranslations()
  const { info, name } = property

  return (
    <div className="flex h-32 max-w-36 flex-col gap-2 rounded-lg border-2 bg-gray-100 p-2">
      <div className="flex justify-between">
        <h5 className="text-xs text-gray-500">
          {t(`forecast.sections.avalancheProblems.modal.labels.${name}`)}
        </h5>
        {/* TODO: Add info tooltip */}
        {info && <InformationCircleIcon className="size-4 text-gray-500" />}
      </div>
      {children}
    </div>
  )
}

export default PropertyTile
