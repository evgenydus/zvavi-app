/* eslint-disable max-lines */

'use client'

import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'

import { useForecastCreate, useUpdateForecast } from '@/data/hooks/forecasts'
import type { ForecastCreateUpdatePayload } from '@/data/hooks/forecasts/types'

import { Button, TextInput } from '@/UI/components/inputs'
import { InputBlock } from './common'
import AdditionalTextFields from './AdditionalTextFields'
import { HazardLevels } from './HazardLevels'
import { ProblemsSection } from './ProblemsSection'
import { RecentAvalanchesSection } from './RecentAvalanchesSection'
import TextAreaField from './TextAreaField'
import ValidUntil from './ValidUntil'

import type { Avalanche, ForecastFormData, Problem } from '@/business/types'

type ForecastFormProps = {
  initialFormData: ForecastFormData
  initialProblems: Problem[]
  initialRecentAvalanches: Avalanche[]
  onClose: () => void
}

// TODO: Implement Validations https://app.asana.com/0/1208747689500826/1209084695587061/f
const ForecastForm = ({
  initialFormData,
  initialProblems,
  initialRecentAvalanches,
  onClose,
}: ForecastFormProps) => {
  const t = useTranslations()
  const tForecast = useTranslations('admin.forecast')

  const [formData, setFormData] = useState<ForecastFormData>(initialFormData)
  const [problems, setProblems] = useState<Problem[]>(initialProblems)
  const [recentAvalanches, setRecentAvalanches] = useState<Avalanche[]>(initialRecentAvalanches)

  const { error, mutate: createForecast } = useForecastCreate()
  const { error: updateError, mutate: updateForecast } = useUpdateForecast()

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
    const payload: ForecastCreateUpdatePayload = {
      avalancheProblems: problems,
      forecast: {
        ...formData,
        validUntil: formData.validUntil ? formData.validUntil.toISOString() : null,
      },
      recentAvalanches,
    }

    // TODO: Handle errors https://app.asana.com/0/1208747689500826/1209084695587061/f
    try {
      if (initialFormData.id) {
        await updateForecast({
          ...payload,
          initialProblems,
          initialRecentAvalanches,
        })
      } else {
        await createForecast(payload)
      }

      onClose()
    } catch {
      console.error(updateError || error)
    }
  }, [
    problems,
    recentAvalanches,
    formData,
    initialFormData.id,
    onClose,
    initialProblems,
    initialRecentAvalanches,
    updateForecast,
    createForecast,
    updateError,
    error,
  ])

  return (
    <>
      <section className="flex w-[976px] flex-col items-center gap-3 p-6">
        <form className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{tForecast('form.general.title')}</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <InputBlock label={tForecast('form.general.labels.forecaster')}>
                <TextInput
                  className="flex-1"
                  onChange={handleTextFieldChange('forecaster')}
                  value={formData.forecaster}
                />
              </InputBlock>

              <ValidUntil formData={formData} setFormData={setFormData} />
            </div>
          </div>

          <TextAreaField
            formData={formData}
            onChange={handleTextFieldChange('summary')}
            type="summary"
          />
          <hr />
          <HazardLevels setFormData={setFormData} value={formData.hazardLevels} />
          <hr />
          <ProblemsSection problems={problems} setProblems={setProblems} />
          <hr />
          <RecentAvalanchesSection
            avalanches={recentAvalanches}
            setAvalanches={setRecentAvalanches}
          />
          <hr />
          <AdditionalTextFields formData={formData} onChange={handleTextFieldChange} />
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
