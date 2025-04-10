import { useTranslations } from 'next-intl'

import type { Problem } from '@/business/types'
import { ProblemItem } from './ProblemItem'

import type { ProblemFormProps } from '../ProblemForm'

type ProblemsListProps = Omit<ProblemFormProps, 'problemData'> & {
  isOpenNewProblem: boolean
  problems: Problem[]
  onDelete: (id?: number | string) => void
}

const ProblemList = ({
  isOpenNewProblem,
  onCancel,
  onDelete,
  onSave,
  problems,
}: ProblemsListProps) => {
  const t = useTranslations()

  if (problems.length === 0 && !isOpenNewProblem) {
    return (
      <p className="text-center text-gray-500">{t('admin.forecast.form.problems.noProblems')}</p>
    )
  }

  return (
    <ul className="space-y-4">
      {problems.map((problemData) => (
        <li key={problemData.type}>
          <ProblemItem
            onCancel={onCancel}
            onDelete={() => onDelete(problemData.id)}
            onSave={onSave}
            problemData={problemData}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProblemList
