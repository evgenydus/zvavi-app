import type { Sizes } from '@/UI/types'

export type IconButtonSize = Sizes

export const containerClassesBySize: Record<IconButtonSize, string> = {
  lg: 'size-8',
  md: 'size-7',
  sm: 'size-6',
}

export const iconSizesBySize: Record<IconButtonSize, number> = {
  lg: 24,
  md: 20,
  sm: 16,
}
