'use client'

import { useCallback } from 'react'

import { routes } from '@/UI/header/NavMenu/constants'
import { supabase } from '@/data'
import { useRouter } from 'next/navigation'

const AdminPage = () => {
  const router = useRouter()

  const handleLogOutClick = useCallback(async () => {
    try {
      await supabase.auth.signOut()
      router.push(routes.login)
    } catch (error) {
      console.error('Error logging out: ', error)
    }
  }, [router])

  return (
    <div>
      <p>Admin page</p>
      <button onClick={handleLogOutClick} type="button">
        log out
      </button>
    </div>
  )
}

export default AdminPage
