'use client'

import { routes } from '@/UI/header/NavMenu/constants'
import { supabase } from '@/data'
import { useAuth } from '@/UI/hooks'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Logo from '@/assets/logo.png'

import { Button } from '@/UI/components/inputs'
import { NavMenu } from './NavMenu'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const t = useTranslations()
  const { isAuthenticated } = useAuth()

  const handleLogOutClick = useCallback(async () => {
    try {
      await supabase.auth.signOut()
      router.push(routes.login)
    } catch (error) {
      console.error('Error logging out: ', error)
    }
  }, [router])

  return (
    <header className="flex items-center justify-between gap-2 px-6 py-4">
      <Link className="flex items-center gap-2" href="/">
        <Image alt="Logo" height={32} src={Logo} width={32} />
        <h1 className="text-2xl font-semibold text-primary">Avalanche.ge</h1>
      </Link>

      <div className="flex items-center gap-4">
        <NavMenu />

        {isAuthenticated && <Button onClick={handleLogOutClick}>{t('auth.logout.button')}</Button>}
      </div>
    </header>
  )
}

export default Header
