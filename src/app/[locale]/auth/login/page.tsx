'use client'

import { useCallback, useState } from 'react'

import { routes } from '@/UI/header/NavMenu/constants'
import { supabase } from '@/data'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Field, Fieldset, Label, Legend } from '@headlessui/react'
import { TextInput, Button } from '@/UI/components/inputs'
import Link from 'next/link'

// TODO: Add placeholders
// TODO: Human-clear error messages by code
const LoginPage = () => {
  const t = useTranslations()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSignIn = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setErrorMessage('')

      if (!email || !password) return

      const { error } = await supabase.auth.signInWithPassword({ email, password })

      setPassword('')

      if (error) {
        setErrorMessage(error.message)
      } else {
        router.push(routes.admin)
      }
    },
    [email, password, router],
  )

  const handleEmailChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value),
    [setEmail],
  )

  const handlePasswordChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    [setPassword],
  )

  return (
    <>
      <form className="w-full max-w-lg px-4" onSubmit={handleSignIn}>
        <Fieldset className="space-y-6 rounded p-6 sm:p-10 dark:text-white">
          <Legend className="text-center text-2xl font-semibold ">{t('auth.login.title')}</Legend>

          <Field>
            <Label className="text-sm/6">{t('common.labels.email')}</Label>
            <TextInput onChange={handleEmailChange} required type="email" />
          </Field>

          <Field>
            <Label className="text-sm/6">{t('auth.labels.password')}</Label>
            <TextInput onChange={handlePasswordChange} required type="password" />
          </Field>

          {/* TODO: Add loader */}
          <Button className="ml-auto" type="submit">
            {t('auth.login.signIn')}
          </Button>
        </Fieldset>

        {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
      </form>

      <div className="text-center">
        <Link className="text-sm text-primary underline" href={routes.forgotPassword}>
          {t('auth.login.forgotPassword')}
        </Link>
      </div>
    </>
  )
}

export default LoginPage
