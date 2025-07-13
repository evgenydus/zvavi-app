'use client'

import { useCallback, useState } from 'react'
import _omit from 'lodash/omit'
import { useTranslations } from 'next-intl'

import { initialFormData } from './constants'

import { Button, TextInput } from '@/UI/components/inputs'
import { InputBlock } from './common'
import AdditionalTextFields from './AdditionalTextFields'
import { HazardLevels } from './HazardLevels'
import { ProblemsSection } from './ProblemsSection'
import { RecentAvalanchesSection } from './RecentAvalanchesSection'
import TextAreaField from './TextAreaField'
import { useForecastSubmit } from './useForecastSubmit'
import ValidUntil from './ValidUntil'

import type { Avalanche, ForecastFormData, FullForecast, Problem } from '@/business/types'

type ForecastFormProps = {
  forecast?: FullForecast
  onClose: () => void
}

// TODO: Implement Validations https://app.asana.com/0/1208747689500826/1209084695587061/f
const ForecastForm = ({ forecast, onClose }: ForecastFormProps) => {
  const t = useTranslations()
  const tForecast = useTranslations('admin.forecast')
  const formattedForecast = {
    ..._omit(forecast, ['avalancheProblems', 'recentAvalanches', 'status', 'createdAt']),
    validUntil: forecast?.validUntil ? new Date(forecast.validUntil) : null,
  }

  const [formData, setFormData] = useState<ForecastFormData>(
    forecast ? formattedForecast : initialFormData,
  )
  const [problems, setProblems] = useState<Problem[]>(forecast?.avalancheProblems ?? [])
  const [recentAvalanches, setRecentAvalanches] = useState<Avalanche[]>(
    forecast?.recentAvalanches ?? [],
  )

  const { handleSubmit } = useForecastSubmit({
    avalancheProblems: problems,
    formData,
    initialProblems: forecast?.avalancheProblems ?? [],
    initialRecentAvalanches: forecast?.recentAvalanches ?? [],
    onClose,
    recentAvalanches,
  })

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

              <ValidUntil setFormData={setFormData} value={formData.validUntil} />
            </div>
          </div>

          <TextAreaField
            onChange={handleTextFieldChange('summary')}
            type="summary"
            value={formData.summary}
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
