import type { StaticImageData } from 'next/image'

import glide from '@/assets/icons/avalancheProblems/glide.jpg'
import looseWet from '@/assets/icons/avalancheProblems/looseWet.jpg'
import persistentSlab from '@/assets/icons/avalancheProblems/persistentSlab.jpg'
import stormSlab from '@/assets/icons/avalancheProblems/stormSlab.jpg'
import windSlab from '@/assets/icons/avalancheProblems/windSlab.jpg'
import considerable from '@/assets/icons/hazardLevel/considerable.svg'
import high from '@/assets/icons/hazardLevel/high.svg'
import low from '@/assets/icons/hazardLevel/low.svg'
import moderate from '@/assets/icons/hazardLevel/moderate.svg'

import type { AvalancheProblemTypes, HazardLevelScale } from '@/business/types'

type HazardIcons = Record<HazardLevelScale, StaticImageData>

export const hazardIcons: HazardIcons = {
  1: low,
  2: moderate,
  3: considerable,
  4: high,
  5: high,
}

// TODO: Update icons here https://app.asana.com/0/1208747689500826/1209939328004606/f
export type ExistingIcons = Extract<
  AvalancheProblemTypes,
  'glide' | 'looseWet' | 'persistentSlab' | 'stormSlab' | 'windSlab'
>
type ProblemIcons = Record<ExistingIcons, StaticImageData>

export const problemIcons: ProblemIcons = {
  glide,
  looseWet,
  persistentSlab,
  stormSlab,
  windSlab,
}

export const backgroundColorByHazardLevel = {
  1: 'bg-hazard-1',
  2: 'bg-hazard-2',
  3: 'bg-hazard-3',
  4: 'bg-hazard-4',
  5: 'bg-hazard-5',
}
