'use client'

import { useCallback, useState } from 'react'
import { Field, Fieldset, Label, Legend } from '@headlessui/react'
import { useLocale, useTranslations } from 'next-intl'

import { routes } from '@/UI/header/NavMenu/constants'
import { useToast } from '@/UI/hooks'

import { Button, TextInput } from '@/UI/components/inputs'

import { supabase } from '@/data'

const ForgotPasswordPage = () => {
  const t = useTranslations()
  const locale = useLocale()
  const { toastSuccess } = useToast()

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

      toastSuccess(t('auth.forgotPassword.messages.sentSuccessfully'))

      if (error) {
        setErrorMessage(t('auth.forgotPassword.messages.sendFailed'))
      } else {
        setErrorMessage('')
      }
    },
    [email, locale, t, toastSuccess],
  )

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form className="w-full max-w-sm px-4" onSubmit={handleSendResetLinkClick}>
        <Fieldset className="space-y-6 rounded p-6 dark:text-white sm:p-10">
          <Legend className="text-center text-2xl font-semibold">
            {t('auth.forgotPassword.title')}
          </Legend>

          <Field>
            <Label className="text-sm/6">{t('common.labels.email')}</Label>
            <TextInput className="w-full" onChange={handleEmailChange} required type="email" />
          </Field>

          <Button className="w-full text-center" type="submit">
            <span className="w-full">{t('auth.forgotPassword.sendResetLink')}</span>
          </Button>
        </Fieldset>

        {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default ForgotPasswordPage
