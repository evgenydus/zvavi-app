import { useTranslations } from 'next-intl'

import { Modal, type ModalProps } from '@/UI/components/Modal'
import { ForecastForm } from './ForecastForm'

type ForecastModalProps = Pick<ModalProps, 'isOpen' | 'onClose'>

const ForecastModal = ({ isOpen, onClose }: ForecastModalProps) => {
  const t = useTranslations()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('admin.forecast.title')}>
      <ForecastForm onClose={onClose} />
    </Modal>
  )
}

export default ForecastModal
