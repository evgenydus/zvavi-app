import { useTranslations } from 'next-intl'
import { ProblemItem } from './ProblemItem'
import type { Problem } from '@/business/types'

type ProblemsListProps = {
  isAdding: boolean
  problems: Problem[]
}

const ProblemsList = ({ isAdding, problems }: ProblemsListProps) => {
  const t = useTranslations()

  if (problems.length === 0 && !isAdding) {
    return (
      <p className="text-center text-gray-500">{t('admin.forecast.form.problems.noProblems')}</p>
    )
  }

  return (
    <ul className="space-y-4">
      {problems.map((problem) => (
        <li key={problem.type}>
          <ProblemItem problem={problem} />
        </li>
      ))}
    </ul>
  )
}

export default ProblemsList
