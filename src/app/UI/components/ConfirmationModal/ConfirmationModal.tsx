import { useTranslations } from 'next-intl'

import { Button } from '@/UI/components/inputs'
import type { ModalProps } from '@/UI/components/Modal'
import { Modal, ModalFooter } from '@/UI/components/Modal'

export type ConfirmationModalProps = ModalProps & {
  onConfirm: () => void
  onCancel?: () => void
}

const ConfirmationModal = ({
  children,
  isOpen,
  onCancel,
  onClose,
  onConfirm,
  title,
}: ConfirmationModalProps) => {
  const tActions = useTranslations('common.actions')

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {children}
      <ModalFooter>
        <Button onClick={onCancel || onClose}>{tActions('cancel')}</Button>
        <Button className="ml-auto" onClick={onConfirm}>
          {tActions('confirm')}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ConfirmationModal
