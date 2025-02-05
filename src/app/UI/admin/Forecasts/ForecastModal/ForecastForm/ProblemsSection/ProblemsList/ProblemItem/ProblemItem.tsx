import { useTranslations } from 'next-intl'

import { ActionButtons, Aspects } from '../../../common/listItem'
import Properties from './Properties'

import type { Problem } from '@/business/types'

const ProblemItem = ({ problem }: { problem: Problem }) => {
  const tForm = useTranslations('admin.forecast.form')

  const { description } = problem

  return (
    <div className="w-full rounded bg-black/[0.03] p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {tForm(`problems.options.problemType.${problem.type}`)}
        </h3>

        <ActionButtons />
      </div>

      <div className="mb-6 flex items-center justify-between gap-6">
        <Properties problem={problem} />
        <Aspects item={problem} />
      </div>

      {description && (
        <div>
          <h4 className="mb-2 font-semibold">{tForm('common.labels.description')}:</h4>
          <p className="max-h-28 overflow-y-auto text-justify">{description}</p>
        </div>
      )}
    </div>
  )
}

export default ProblemItem
