import { useCallback } from 'react'

import { useTranslations } from 'next-intl'

import { Button } from '@/UI/components/inputs'
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
    <Modal isOpen={isOpen} onClose={handleClose} title={t('admin.forecast.title')}>
      <ForecastForm />

      <div className="mt-8 flex justify-end gap-4">
        <Button onClick={handleClose}>{t('common.actions.cancel')}</Button>
        <Button onClick={handleSubmit}>{t('common.actions.submit')}</Button>
      </div>
    </Modal>
  )
}

export default ForecastModal
