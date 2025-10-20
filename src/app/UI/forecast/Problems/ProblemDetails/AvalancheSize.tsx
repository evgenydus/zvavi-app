import { useTranslations } from 'next-intl'

import { SizeScale } from './icons'
import PropertyTile from './PropertyTile'

import type { AvalancheSize } from '@/business/types'

type AvalancheSizeProps = {
  avalancheSize: AvalancheSize
}

const Info = ({ avalancheSize }: AvalancheSizeProps) => {
  const t = useTranslations()

  return (
    <div>
      <p className="mb-2">
        {t(`forecast.sections.avalancheProblems.modal.info.size.${avalancheSize}.description`)}
      </p>
      <ul className="list-disc pl-4">
        {t
          .raw(`forecast.sections.avalancheProblems.modal.info.size.${avalancheSize}.details`)
          ?.map((item: string) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

const AvalancheSize = ({ avalancheSize }: AvalancheSizeProps) => (
  <PropertyTile
    property={{
      info: <Info avalancheSize={avalancheSize} />,
      name: 'size',
      value: avalancheSize,
    }}
  >
    <div className="relative flex flex-1 items-end justify-end">
      <p className="absolute left-0 top-0 text-3xl font-semibold">{avalancheSize}</p>
      <SizeScale size={avalancheSize} />
    </div>
  </PropertyTile>
)

export default AvalancheSize
