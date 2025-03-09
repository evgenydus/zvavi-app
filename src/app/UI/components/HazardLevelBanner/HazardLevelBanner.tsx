import { backgroundColorByHazardLevel, hazardIcons } from '@/UI/constants'
import { hazardLevelsByScale } from '@/business/constants'
import { useTranslations } from 'next-intl'
import classnames from 'classnames'

import Image from 'next/image'

import type { HazardLevelScale } from '@/business/types'

const HazardLevelBanner = ({ hazardLevel }: { hazardLevel: HazardLevelScale }) => {
  const t = useTranslations()
  const title = hazardLevelsByScale[hazardLevel]
  const icon = hazardIcons[hazardLevel]
  const isExtremeRisk = hazardLevel === '5'

  return (
    <div
      className={classnames(
        'flex items-center justify-between rounded-2xl p-4',
        backgroundColorByHazardLevel[hazardLevel],
      )}
    >
      <div
        className={classnames(
          'flex h-20 flex-col justify-between',
          isExtremeRisk ? 'text-white' : 'text-black',
        )}
      >
        <p className="text-sm font-medium">{t('common.labels.overallRiskLevel')}</p>
        <h4 className="text-3xl font-semibold">{title}</h4>
      </div>

      <Image alt="Risk level" height={80} src={icon} />
    </div>
  )
}

export default HazardLevelBanner
