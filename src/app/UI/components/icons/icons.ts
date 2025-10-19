import type { LucideIcon } from 'lucide-react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
  HandshakeIcon,
  HouseIcon,
  InfoIcon,
  MailIcon,
  MenuIcon,
  PencilIcon,
  PlusIcon,
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
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  handshake: HandshakeIcon,
  house: HouseIcon,
  info: InfoIcon,
  mail: MailIcon,
  menu: MenuIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  trash: TrashIcon,
  userPlus: UserPlusIcon,
  users: UsersIcon,
  xMark: XIcon,
}
