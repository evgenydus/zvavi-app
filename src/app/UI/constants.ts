import drySnow1 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-1.png'
import drySnow2 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-2.png'
import drySnow3 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-3.png'
import drySnow45 from '@/assets/icons/snowRating/hazardLevelDry/dry-snow-4-5.png'
import wetSnow1 from '@/assets/icons/snowRating/hazardLevelWet/wet-snow-1.png'
import wetSnow2 from '@/assets/icons/snowRating/hazardLevelWet/wet-snow-2.png'
import wetSnow3 from '@/assets/icons/snowRating/hazardLevelWet/wet-snow-3.png'
import wetSnow45 from '@/assets/icons/snowRating/hazardLevelWet/wet-snow-4-5.png'

import type { HazardLevelScale, SnowCondition } from '@/business/types'
import type { StaticImageData } from 'next/image'

type HazardIcons = Record<SnowCondition, Record<HazardLevelScale, StaticImageData>>

export const hazardIconsBySnowCondition: HazardIcons = {
  dry: {
    1: drySnow1,
    2: drySnow2,
    3: drySnow3,
    4: drySnow45,
    5: drySnow45,
  },
  wet: {
    1: wetSnow1,
    2: wetSnow2,
    3: wetSnow3,
    4: wetSnow45,
    5: wetSnow45,
  },
}
