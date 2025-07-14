import { useTranslations } from 'next-intl'

import { Modal, ModalBody, type ModalProps } from '@/UI/components/Modal'
import { ProblemDetails, type ProblemDetailsProps } from './ProblemDetails'

type ProblemModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & ProblemDetailsProps

const ProblemModal = ({ isOpen, onClose, problem }: ProblemModalProps) => {
  const t = useTranslations()

  return (
    <Modal
      className="w-full"
      isOpen={isOpen}
      onClose={onClose}
      title={t(`admin.forecast.form.problems.options.problemType.${problem.type}`)}
    >
      <ModalBody>
        <ProblemDetails problem={problem} />
      </ModalBody>
    </Modal>
  )
}

export default ProblemModal
