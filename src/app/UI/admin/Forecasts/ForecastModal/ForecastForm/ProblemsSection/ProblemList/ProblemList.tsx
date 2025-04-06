import { useTranslations } from 'next-intl'
import { ProblemItemToggleable } from './ProblemItemToggleable'
import type { Problem } from '@/business/types'
import { ProblemFormProps } from './ProblemItemEdit/ProblemItemEdit'

type ProblemsListProps = {
  isOpenNewProblem: boolean
  problemsFormData: Problem[]
  onDelete: (index: number) => void
  editProps: Omit<ProblemFormProps, 'problemData' | 'onCloseEditMode' | 'index'>
}

export const ProblemList = ({
  editProps,
  isOpenNewProblem,
  onDelete,
  problemsFormData,
}: ProblemsListProps) => {
  const t = useTranslations()

  if (problemsFormData.length === 0 && !isOpenNewProblem) {
    return (
      <p className="text-center text-gray-500">{t('admin.forecast.form.problems.noProblems')}</p>
    )
  }

  return (
    <ul className="space-y-4">
      {problemsFormData.map((problemData, index) => (
        <li key={problemData.type}>
          <ProblemItemToggleable
            editProps={{ ...editProps, index }}
            onDelete={() => onDelete(index)}
            problemData={problemData}
          />
        </li>
      ))}
    </ul>
  )
}
