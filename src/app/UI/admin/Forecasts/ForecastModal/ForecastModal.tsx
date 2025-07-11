import { useTranslations } from 'next-intl'

import { initialFormData } from './ForecastForm/constants'

import type { ModalProps } from '@/UI/components/Modal'
import { Modal } from '@/UI/components/Modal'
import { ForecastForm } from './ForecastForm'

import type { ForecastFormData, FullForecast } from '@/business/types'

const getInitialFormData = (forecast: FullForecast | null): ForecastFormData => {
  if (!forecast) return initialFormData

  return {
    additionalHazards: forecast.additionalHazards,
    forecaster: forecast.forecaster,
    hazardLevels: forecast.hazardLevels,
    id: forecast.id,
    snowpack: forecast.snowpack,
    summary: forecast.summary,
    validUntil: forecast.validUntil ? new Date(forecast.validUntil) : null,
    weather: forecast.weather,
  }
}

type ForecastModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  forecast: FullForecast | null
}

const ForecastModal = ({ forecast, isOpen, onClose }: ForecastModalProps) => {
  const t = useTranslations()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={forecast ? t('admin.forecast.titleEdit') : t('admin.forecast.titleCreate')}
    >
      <ForecastForm
        initialFormData={getInitialFormData(forecast)}
        initialProblems={forecast?.avalancheProblems ?? []}
        initialRecentAvalanches={forecast?.recentAvalanches ?? []}
        onClose={onClose}
      />
    </Modal>
  )
}

export default ForecastModal
