import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { problemIcons } from '@/UI/constants'

import { Icon } from '@/UI/components'
import { Drawer } from '@/UI/components/Drawer'
import { ProblemDetails } from './ProblemDetails'

import type { Problem as ProblemType } from '@/business/types'

const Problem = ({ problem }: { problem: ProblemType }) => {
  const t = useTranslations()
  const icon = problemIcons[problem.type]

  return (
    <Drawer
      content={<ProblemDetails problem={problem} />}
      title={t(`admin.forecast.form.problems.options.problemType.${problem.type}`)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 rounded-2xl bg-black/5 p-3 shadow-md"
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
    </Drawer>
  )
}

export default Problem
