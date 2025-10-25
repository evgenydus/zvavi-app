'use client'

import { useCallback, useEffect, useState } from 'react'
import { Field, Fieldset, Label, Legend } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'

import { Button, TextInput } from '@/UI/components/inputs'

import { supabase } from '@/data'

const validatePasswords = (password: string, passwordConfirm: string) => {
  return passwordConfirm === password
}

const SetNewPasswordPage = () => {
  const t = useTranslations()
  const router = useRouter()
  const locale = useLocale()

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handlePasswordChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    [setPassword],
  )

  const handlePasswordConfirmChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(target.value),
    [setPasswordConfirm],
  )

  const handleValidatePasswords = useCallback(() => {
    if (!validatePasswords(password, passwordConfirm)) {
      setErrorMessage('Passwords do not match')
    } else {
      setErrorMessage('')
    }
  }, [password, passwordConfirm])

  const handleNewPasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (errorMessage) return

    const { error } = await supabase.auth.updateUser(
      { password },
      { emailRedirectTo: `${window.location.origin}/${locale}${routes.login}` },
    )

    if (error) {
      setErrorMessage(error.message)
    } else {
      router.push(routes.login)
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (!user || error) {
        setErrorMessage(t('auth.errors.invalidSession'))
      }
    }

    checkAuth()
  }, [t])

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form className="w-full max-w-sm px-4" onSubmit={handleNewPasswordSubmit}>
        <Fieldset className="space-y-6 rounded p-6 dark:text-white sm:p-10">
          <Legend className="text-center text-2xl font-semibold">
            {t('auth.setNewPassword.title')}
          </Legend>

          <Field>
            <Label className="text-sm/6">{t('auth.labels.password')}</Label>
            <TextInput
              className="w-full"
              onBlur={handleValidatePasswords}
              onChange={handlePasswordChange}
              required
              type="password"
            />
          </Field>

          <Field>
            <Label className="text-sm/6">{t('auth.labels.confirmPassword')}</Label>
            <TextInput
              className="w-full"
              onBlur={handleValidatePasswords}
              onChange={handlePasswordConfirmChange}
              required
              type="password"
            />
          </Field>

          <Button className="w-full text-center" type="submit">
            <span className="w-full">{t('common.actions.save')}</span>
          </Button>
        </Fieldset>

        {errorMessage && <p className="mt-4 text-center text-sm text-red-500">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default SetNewPasswordPage
