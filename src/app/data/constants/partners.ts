import { type StaticImageData } from 'next/image'

import adrenalineLogo from '@/assets/images/partnerLogos/adrenaline.png'
import buruSportsLogo from '@/assets/images/partnerLogos/burusports.svg'
import drunkCherryLogo from '@/assets/images/partnerLogos/drunkcherry.png'
import snowLabLogo from '@/assets/images/partnerLogos/snowlab.png'
import vagabondLogo from '@/assets/images/partnerLogos/vagabond.png'

export type Partner = {
  isHidden?: boolean
  infoKey?: string
  logo: StaticImageData
  name: string
  url: string
  id: string
}

export const partners: Partner[] = [
  {
    id: 'vagabond',
    infoKey: 'partners.info.vagabond',
    logo: vagabondLogo,
    name: 'Vagabond Adventures',
    url: 'https://vagabondadventures.ge/',
  },
  {
    id: 'snowlab',
    isHidden: true,
    logo: snowLabLogo,
    name: 'Snowlab',
    url: 'https://snow-lab.com',
  },
  {
    id: 'adrenaline',
    logo: adrenalineLogo,
    name: 'Adrenaline',
    url: 'https://www.adrenaline.ge/',
  },
  {
    id: 'drunk-cherry',
    isHidden: true,
    logo: drunkCherryLogo,
    name: 'Drunk Cherry',
    url: 'https://www.instagram.com/gudauri_drunkcherry/',
  },
  {
    id: 'buru-sports',
    logo: buruSportsLogo,
    name: 'Buru Sports',
    url: 'https://burusports.ge/',
  },
]
