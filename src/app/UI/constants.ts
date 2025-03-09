import drySnow1 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-1.png'
import drySnow2 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-2.png'
import drySnow3 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-3.png'
import drySnow45 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-4-5.png'

import type { HazardLevelScale } from '@/business/types'
import type { StaticImageData } from 'next/image'

type HazardIcons = Record<HazardLevelScale, StaticImageData>

export const hazardIcons: HazardIcons = {
  1: drySnow1,
  2: drySnow2,
  3: drySnow3,
  4: drySnow45,
  5: drySnow45,
}

export const backgroundColorByHazardLevel = {
  1: 'bg-hazard-1',
  2: 'bg-hazard-2',
  3: 'bg-hazard-3',
  4: 'bg-hazard-4',
  5: 'bg-hazard-5',
}
