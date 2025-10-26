import type { LucideIcon } from 'lucide-react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLink,
  EyeIcon,
  EyeOffIcon,
  HandshakeIcon,
  HouseIcon,
  InfoIcon,
  MailIcon,
  MenuIcon,
  PencilIcon,
  PlusIcon,
  Snowflake,
  TrashIcon,
  UserPlusIcon,
  UsersIcon,
  XIcon,
} from 'lucide-react'

import type { IconName } from '@/UI/components/icons/types'

export const iconRenderers: Record<IconName, LucideIcon> = {
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronRight: ChevronRightIcon,
  externalLink: ExternalLink,
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  handshake: HandshakeIcon,
  house: HouseIcon,
  info: InfoIcon,
  mail: MailIcon,
  menu: MenuIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  snowflake: Snowflake,
  trash: TrashIcon,
  userPlus: UserPlusIcon,
  users: UsersIcon,
  xMark: XIcon,
}
