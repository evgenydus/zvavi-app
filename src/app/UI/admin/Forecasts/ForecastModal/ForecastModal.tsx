import { useCallback } from 'react'

import { useTranslations } from 'next-intl'

import { ForecastForm } from './ForecastForm'
import { Modal } from '@/UI/components/Modal'

type ForecastModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ForecastModal = ({ isOpen, onClose }: ForecastModalProps) => {
  const t = useTranslations()

  const handleSubmit = useCallback(() => {
    console.log('SUBMIT: ')
  }, [])

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title={t('admin.forecast.title')}
    >
      <ForecastForm />
    </Modal>
  )
}

export default ForecastModal
