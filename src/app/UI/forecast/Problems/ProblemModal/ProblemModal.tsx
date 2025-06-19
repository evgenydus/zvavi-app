import { useTranslations } from 'next-intl'

import { Modal, type ModalProps } from '@/UI/components/Modal'
import { ModalContent, type ModalContentProps } from './ModalContent'

type ProblemModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & ModalContentProps

const ProblemModal = ({ isOpen, onClose, problem }: ProblemModalProps) => {
  const t = useTranslations()

  return (
    <Modal
      className="w-full"
      isOpen={isOpen}
      onClose={onClose}
      title={t(`admin.forecast.form.problems.options.problemType.${problem.type}`)}
    >
      <ModalContent problem={problem} />
    </Modal>
  )
}

export default ProblemModal
