'use client'

import { useTranslations } from 'next-intl'

import { Button, TextInput } from '@/UI/inputs'
import { Field, Label } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'
import ProblemForm from './problems/ProblemForm'

const Forecast = () => {
  const tForecast = useTranslations('admin.forecast')

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-3 rounded bg-slate-100 p-4">
      <h2 className="text-2xl font-semibold">{tForecast('title')}</h2>

      <form className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{tForecast('form.general.title')}</h3>
          <Field className="flex items-center gap-3">
            <Label className="w-36 font-semibold">
              {tForecast('form.general.labels.forecaster')}
            </Label>
            <TextInput className="min-w-52" name="forecaster_name" />
          </Field>

          <Field className="flex items-center gap-3">
            <Label className="w-36 font-semibold">
              {tForecast('form.general.labels.validUntil')}
            </Label>
            <p>Date Picker</p>
          </Field>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

          <div>
            <Button>
              <PlusIcon className="size-5" />
              {tForecast('form.problems.labels.addProblem')}
            </Button>
          </div>

          <div>
            <ProblemForm />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Forecast
