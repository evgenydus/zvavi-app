'use client'

import { useCallback, useState } from 'react'

import { initialProblemData } from './constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'

import { Button, DatePicker, TextInput } from '@/UI/components/inputs'
import { Field, Label } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemForm } from './ProblemForm'
import { ProblemItem } from './ProblemItem'

import type { Problem } from '@/business/types'

const ForecastForm = () => {
  const tForecast = useTranslations('admin.forecast')
  const [isProblemFormOpen, { setFalse: closeProblemForm, setTrue: openProblemForm }] =
    useBoolean(false)

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const [problems, setProblems] = useState<Problem[]>([])

  const handleAddProblemClick = useCallback(() => {
    setProblems((prev) => [...prev, problemData])
    closeProblemForm()
    setProblemData(initialProblemData)
  }, [closeProblemForm, problemData])

  const handleProblemCancel = useCallback(() => {
    closeProblemForm()
    setProblemData(initialProblemData)
  }, [closeProblemForm])

  return (
    <div className="flex flex-col items-center gap-3">
      <form className="flex w-full flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{tForecast('form.general.title')}</h3>
          <div className="grid grid-cols-2 gap-x-14">
            <Field className="flex items-center gap-3">
              <Label className="w-32 font-semibold">
                {tForecast('form.general.labels.forecaster')}
              </Label>
              <TextInput className="flex-1" name="forecaster_name" />
            </Field>

            <Field className="flex items-center gap-3">
              <Label className="w-32 font-semibold">
                {tForecast('form.general.labels.validUntil')}
              </Label>
              <DatePicker showTimeSelect />
            </Field>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

          <Button className="ml-auto" disabled={isProblemFormOpen} onClick={openProblemForm}>
            <PlusIcon className="size-5" />
            {tForecast('form.problems.labels.addProblem')}
          </Button>

          <ul className="space-y-4">
            {problems.map((problem) => (
              <li key={problem.type}>
                <ProblemItem problem={problem} />
              </li>
            ))}
          </ul>

          {isProblemFormOpen && (
            <ProblemForm
              onProblemAdd={handleAddProblemClick}
              onProblemCancel={handleProblemCancel}
              problemData={problemData}
              setProblemData={setProblemData}
            />
          )}
        </div>
      </form>
    </div>
  )
}

export default ForecastForm
