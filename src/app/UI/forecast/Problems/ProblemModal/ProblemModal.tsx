import { useTranslations } from 'next-intl'
import { Modal, type ModalProps } from '@/UI/components/Modal'
import type { Problem } from '@/business/types'

type ProblemModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  problem: Problem
}

const ProblemModal = ({ isOpen, onClose, problem }: ProblemModalProps) => {
  const t = useTranslations()
  const { description, type } = problem

  return (
    <Modal
      className="w-full"
      isOpen={isOpen}
      onClose={onClose}
      title={t(`admin.forecast.form.problems.options.problemType.${type}`)}
    >
      <div>
        <p className="mb-2 ">{description}</p>
      </div>
    </Modal>
  )
}

export default ProblemModal
