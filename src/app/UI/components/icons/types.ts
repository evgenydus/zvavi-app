import type { Sizes } from '@/UI/types'

export type IconName =
  | 'check'
  | 'chevronDown'
  | 'chevronRight'
  | 'externalLink'
  | 'eye'
  | 'eyeOff'
  | 'handshake'
  | 'house'
  | 'info'
  | 'mail'
  | 'menu'
  | 'pencil'
  | 'plus'
  | 'snowflake'
  | 'trash'
  | 'userPlus'
  | 'users'
  | 'xMark'

type IconSize = Sizes

export type IconProps = {
  className?: string
  icon: IconName
  size?: IconSize
}
