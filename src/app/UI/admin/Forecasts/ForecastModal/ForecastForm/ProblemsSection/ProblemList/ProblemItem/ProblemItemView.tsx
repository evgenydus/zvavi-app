import { useTranslations } from 'next-intl'

import { ActionButtons, Aspects } from '../../../common/listItem'
import Properties from './Properties'

import type { Problem } from '@/business/types'

type ProblemItemProps = {
  problemData: Problem
  onEdit: () => void
  onDelete: () => void
}

export const ProblemItemView = ({ onDelete, onEdit, problemData }: ProblemItemProps) => {
  const tForm = useTranslations('admin.forecast.form')

  const { description } = problemData

  return (
    <div className="w-full rounded bg-black/[0.03] p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {tForm(`problems.options.problemType.${problemData.type}`)}
        </h3>

        <ActionButtons onDelete={onDelete} onEdit={onEdit} />
      </div>

      <div className="mb-6 flex items-center justify-between gap-6">
        <Properties problemData={problemData} />
        <Aspects className="w-[355px]" item={problemData} />
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
