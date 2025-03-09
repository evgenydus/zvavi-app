import adrenalineLogo from '@/assets/images/partnersLogo/adrenaline.png'
import drunkCherryLogo from '@/assets/images/partnersLogo/drunkcherry.png'
import snowLabLogo from '@/assets/images/partnersLogo/snowlab.png'
import xtremeLogo from '@/assets/images/partnersLogo/xtreme.png'

import type { StaticImageData } from 'next/image'

export type Partner = {
  url: string
  logo: StaticImageData
  name: string
}

export const partners: Partner[] = [
  {
    logo: snowLabLogo,
    name: 'Snowlab',
    url: 'https://snow-lab.com',
  },
  {
    logo: adrenalineLogo,
    name: 'Adrenaline',
    url: 'https://www.adrenaline.ge/',
  },
  {
    logo: drunkCherryLogo,
    name: 'Drunk Cherry',
    url: 'https://www.instagram.com/gudauri_drunkcherry/',
  },
  {
    logo: xtremeLogo,
    name: 'Xtreme',
    url: 'https://xtreme.ge/',
  },
]
