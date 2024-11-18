import Image from 'next/image'
import Link from 'next/link'

import { NavMenu } from './NavMenu'

import Logo from '@/assets/logo.png'

const Header = () => (
  <div className="flex items-center justify-between gap-2 px-6 py-4">
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image alt="Logo" height={32} src={Logo} width={32} />
        <h1 className="text-2xl font-semibold text-primary">Avalanche.ge</h1>
      </div>
    </Link>

    <NavMenu />
  </div>
)

export default Header
