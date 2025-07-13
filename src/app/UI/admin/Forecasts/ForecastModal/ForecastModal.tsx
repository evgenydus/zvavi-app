import { useTranslations } from 'next-intl'

import type { ModalProps } from '@/UI/components/Modal'
import { Modal } from '@/UI/components/Modal'
import { ForecastForm } from './ForecastForm'

import type { FullForecast } from '@/business/types'

type ForecastModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  forecast?: FullForecast
}

const ForecastModal = ({ forecast, isOpen, onClose }: ForecastModalProps) => {
  const t = useTranslations()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={forecast ? t('admin.forecast.modalTitle.edit') : t('admin.forecast.modalTitle.create')}
    >
      <ForecastForm forecast={forecast} onClose={onClose} />
    </Modal>
  )
}

export default ForecastModal
