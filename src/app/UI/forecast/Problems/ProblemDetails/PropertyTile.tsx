import { useTranslations } from 'next-intl'

import { IconButton } from '@/UI/components'
import { Drawer } from '@/UI/components/Drawer'

type PropertyTileProps = {
  children: React.ReactNode
  property: { name: string; info?: React.ReactNode; value?: string | number }
}

const PropertyTile = ({ children, property }: PropertyTileProps) => {
  const t = useTranslations()
  const { info, name, value } = property

  const propertyName = t(`forecast.sections.avalancheProblems.modal.labels.${name}`)
  const infoTitle = value ? `${propertyName} - ${value}` : propertyName

  return (
    <div className="flex h-32 w-full max-w-36 flex-col gap-2 rounded-lg border-2 bg-gray-100 p-2">
      <div className="flex justify-between">
        <h5 className="text-xs text-gray-500">{propertyName}</h5>
        {info && (
          <Drawer content={info} title={infoTitle}>
            <IconButton className="stroke-gray-400" iconProps={{ icon: 'info' }} size="sm" />
          </Drawer>
        )}
      </div>
      {children}
    </div>
  )
}

export default PropertyTile
