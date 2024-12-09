import Logo from '@/assets/logo.png'

import Image from 'next/image'
import Link from 'next/link'

import { NavMenu } from './NavMenu'

const Header = () => (
  <header className="flex items-center justify-between gap-2 px-6 py-4">
    <Link className="flex items-center gap-2" href="/">
      <Image alt="Logo" height={32} src={Logo} width={32} />
      <h1 className="text-2xl font-semibold text-primary">Avalanche.ge</h1>
    </Link>

    <NavMenu />
  </header>
)

export default Header
