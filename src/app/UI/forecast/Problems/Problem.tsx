import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { problemIcons } from '@/UI/constants'
import { useBoolean } from '@/UI/hooks'

import { Icon } from '@/UI/components'
import { ProblemModal } from './ProblemModal'

import type { Problem as ProblemType } from '@/business/types'

const Problem = ({ problem }: { problem: ProblemType }) => {
  const t = useTranslations()
  const [isModalOpen, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)

  const icon = problemIcons[problem.type]

  return (
    <>
      <button
        className="flex w-full items-center justify-between gap-2 rounded-2xl bg-black/5 p-3 shadow-md"
        onClick={openModal}
        type="button"
      >
        <div className="flex items-center gap-3">
          <div className="size-12">
            {icon && (
              <Image alt="Avalanche problem" className="rounded-xl" height={48} src={icon} />
            )}
          </div>
          <h3 className="font-semibold">
            {t(`admin.forecast.form.problems.options.problemType.${problem.type}`)}
          </h3>
        </div>

        <Icon icon="chevronRight" />
      </button>

      <ProblemModal isOpen={isModalOpen} onClose={closeModal} problem={problem} />
    </>
  )
}

export default Problem
