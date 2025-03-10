'use client'

import { useCallback, useState } from 'react'

import { initialFormData } from './constants'
import { useForecastCreate } from '@/data/hooks/forecasts'
import { useTranslations } from 'next-intl'

import { Button, TextInput } from '@/UI/components/inputs'
import { ProblemsSection } from './ProblemsSection'
import InputBlock from './InputBlock'
import TextAreaField from './TextAreaField'
import ValidUntil from './ValidUntil'

import type { Problem, ForecastFormData } from '@/business/types'

// TODO: Implement Validations https://app.asana.com/0/1208747689500826/1209084695587061/f
const ForecastForm = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations()
  const tForecast = useTranslations('admin.forecast')

  const [formData, setFormData] = useState<ForecastFormData>(initialFormData)
  const [problems, setProblems] = useState<Problem[]>([])

  const { error, mutate: createForecast } = useForecastCreate()

  const handleTextFieldChange = useCallback(
    (fieldName: keyof ForecastFormData) =>
      ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
          ...prev,
          [fieldName]: target.value,
        }))
      },
    [],
  )

  const handleSubmit = useCallback(async () => {
    const { forecaster, snowpack, summary, validUntil, weather } = formData
    const payload = {
      forecast: {
        forecaster,
        snowpack,
        summary,
        validUntil: validUntil ? validUntil.toISOString() : null,
        weather,
      },
      problems,
    }

    // TODO: Handle errors https://app.asana.com/0/1208747689500826/1209084695587061/f
    try {
      await createForecast(payload)
      onClose()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.error(error)
    }
  }, [formData, problems, createForecast, onClose, error])

  return (
    <>
      <section className="flex w-[976px] flex-col items-center gap-3 p-6">
        <form className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{tForecast('form.general.title')}</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <InputBlock label={tForecast('form.general.labels.forecaster')}>
                <TextInput className="flex-1" onChange={handleTextFieldChange('forecaster')} />
              </InputBlock>

              <ValidUntil formData={formData} setFormData={setFormData} />
            </div>
          </div>

          <TextAreaField
            formData={formData}
            onChange={handleTextFieldChange('summary')}
            type="summary"
          />

          <ProblemsSection problems={problems} setProblems={setProblems} />

          {/*  Recent Avalanches form  */}

          <div className="flex items-center gap-6">
            <TextAreaField
              formData={formData}
              onChange={handleTextFieldChange('snowpack')}
              type="snowpack"
            />

            <TextAreaField
              formData={formData}
              onChange={handleTextFieldChange('weather')}
              type="weather"
            />
          </div>
        </form>
      </section>

      <footer className="flex h-16 items-center justify-end gap-4 border-t px-6">
        <Button onClick={onClose}>{t('common.actions.cancel')}</Button>
        <Button onClick={handleSubmit}>{t('common.actions.submit')}</Button>
      </footer>
    </>
  )
}

export default ForecastForm
