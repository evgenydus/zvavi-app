import { Asap, Inter, Manrope, Ubuntu_Sans_Mono as UbuntuSansMono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600'],
})

export const asap = Asap({
  subsets: ['latin'],
  variable: '--font-asap',
  weight: ['400', '500', '600'],
})

export const ubuntuSans = UbuntuSansMono({
  subsets: ['latin'],
  variable: '--font-ubuntu-sans',
})
