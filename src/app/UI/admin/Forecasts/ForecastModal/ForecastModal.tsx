import { useTranslations } from 'next-intl'

import type { ModalProps } from '@/UI/components/Modal'
import { Modal } from '@/UI/components/Modal'
import { ForecastForm, getInitialFormData } from './ForecastForm'

import type { FullForecast } from '@/business/types'

type ForecastModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  forecast: FullForecast | null
}

const ForecastModal = ({ forecast, isOpen, onClose }: ForecastModalProps) => {
  const t = useTranslations()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`admin.forecast.title.${forecast ? 'edit' : 'create'}`)}
    >
      <ForecastForm initialFormData={getInitialFormData(forecast)} onClose={onClose} />
    </Modal>
  )
}

export default ForecastModal
