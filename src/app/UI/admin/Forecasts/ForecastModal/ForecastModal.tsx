import { useTranslations } from 'next-intl'

import { ForecastForm } from './ForecastForm'
import { Modal, type ModalProps } from '@/UI/components/Modal'

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
