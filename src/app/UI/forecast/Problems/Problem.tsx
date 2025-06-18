import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { type ExistingIcons, problemIcons } from '@/UI/constants'
import { useBoolean } from '@/UI/hooks'

import { ProblemModal } from './ProblemModal'

import type { Problem as ProblemType } from '@/business/types'

const Problem = ({ problem }: { problem: ProblemType }) => {
  const t = useTranslations()
  const [isModalOpen, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)

  // TODO: Update icons here https://app.asana.com/0/1208747689500826/1209939328004606/f
  const icon = problemIcons[problem.type as ExistingIcons]

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

        <ChevronDownIcon className="size-5 -rotate-90" />
      </button>

      <ProblemModal isOpen={isModalOpen} onClose={closeModal} problem={problem} />
    </>
  )
}

export default Problem
