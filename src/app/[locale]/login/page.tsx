'use client'

import { useCallback } from 'react'

import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline'
import { Field, Fieldset, Label, Legend } from '@headlessui/react'
import { TextInput, Button } from '@/UI/inputs'
import { useTranslations } from 'next-intl'

const LoginPage = () => {
  const t = useTranslations()

  const handleEmailChange = useCallback(() => {}, [])
  const handlePasswordChange = useCallback(() => {}, [])

  return (
    <form className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded p-6 sm:p-10 dark:text-white">
        <Legend className="text-center text-2xl font-semibold ">{t('login.title')}</Legend>
        <Field className="flex items-center gap-2">
          <Label className="text-sm/6 font-medium ">
            <EnvelopeIcon className="size-5" />
          </Label>
          <TextInput onChange={handleEmailChange} required type="email" />
        </Field>
        <Field className="flex items-center gap-2">
          <Label className="text-sm/6 font-medium">
            <KeyIcon className="size-5" />
          </Label>
          <TextInput onChange={handlePasswordChange} required type="password" />
        </Field>
        <Button className="ml-auto" type="submit">
          {t('login.signIn')}
        </Button>
      </Fieldset>
    </form>
  )
}

export default LoginPage
