import type { Sizes } from '@/UI/types'

export const containerClassesBySize: Record<Sizes, string> = {
  lg: 'size-7',
  md: 'size-6',
  sm: 'size-5',
}

export const iconSizesBySize: Record<Sizes, number> = {
  lg: 24,
  md: 20,
  sm: 16,
}
