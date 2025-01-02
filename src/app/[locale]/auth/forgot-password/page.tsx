'use client'

import { useCallback, useState } from 'react'

import { routes } from '@/UI/header/NavMenu/constants'
import { supabase } from '@/data'
import { useTranslations, useLocale } from 'next-intl'

import { Button, TextInput } from '@/UI/components/inputs'
import { Field, Fieldset, Label, Legend } from '@headlessui/react'

const ForgotPasswordPage = () => {
  const t = useTranslations()
  const locale = useLocale()

  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value),
    [setEmail],
  )

  const handleSendResetLinkClick = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        // TODO: Check if window.location.origin works on production
        redirectTo: `${window.location.origin}/${locale}${routes.setNewPassword}`,
      })

      if (error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('')
      }
    },
    [email],
  )

  return (
    <form className="w-full max-w-lg px-4" onSubmit={handleSendResetLinkClick}>
      <Fieldset className="space-y-6 rounded p-6 sm:p-10 dark:text-white">
        <Legend className="text-center text-2xl font-semibold">
          {t('auth.forgotPassword.title')}
        </Legend>

        <Field>
          <Label className="text-sm/6">{t('common.labels.email')}</Label>
          <TextInput onChange={handleEmailChange} required type="email" />
        </Field>

        <Button className="ml-auto" type="submit">
          {t('auth.forgotPassword.sendResetLink')}
        </Button>
      </Fieldset>

      {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
    </form>
  )
}

export default ForgotPasswordPage
