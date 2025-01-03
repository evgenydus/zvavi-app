import { useTranslations } from 'next-intl'

import ActionButtons from './ActionButtons'
import Aspects from './Aspects'
import Properties from './Properties'

import type { Problem } from '@/business/types'

const ProblemItem = ({ problem }: { problem: Problem }) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const { description } = problem

  return (
    <div className="w-full rounded bg-black/[0.03] p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {tProblems(`options.problemType.${problem.type}`)}
        </h3>

        <ActionButtons />
      </div>

      <div className="mb-6 flex items-center justify-between gap-6">
        <Properties problem={problem} />
        <Aspects problem={problem} />
      </div>

      {description && (
        <div>
          <h4 className="mb-2 font-semibold">{tProblems('labels.description')}:</h4>
          <p className="text-justify">{description}</p>
        </div>
      )}
    </div>
  )
}

export default ProblemItem
