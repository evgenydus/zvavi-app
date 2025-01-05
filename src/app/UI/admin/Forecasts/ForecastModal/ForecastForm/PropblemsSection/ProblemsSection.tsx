import { useCallback, useState } from 'react'

import { initialProblemData } from '../constants'
import { useBoolean } from '@/UI/hooks'
import { useTranslations } from 'next-intl'

import { Button } from '@/UI/components/inputs'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProblemItem } from './ProblemItem'
import { ProblemForm } from './ProblemForm'

import type { Problem } from '@/business/types'

type ProblemsSectionProps = {
  problems: Problem[]
  setProblems: (value: React.SetStateAction<Problem[]>) => void
}

const ProblemsSection = ({ problems, setProblems }: ProblemsSectionProps) => {
  const tForecast = useTranslations('admin.forecast')

  const [problemData, setProblemData] = useState<Problem>(initialProblemData)
  const [isProblemFormOpen, { setFalse: closeProblemForm, setTrue: openProblemForm }] =
    useBoolean(false)

  const handleAddProblemClick = useCallback(() => {
    setProblems((prev) => [...prev, problemData])
    closeProblemForm()
    setProblemData(initialProblemData)
  }, [closeProblemForm, problemData, setProblems])

  const handleProblemCancel = useCallback(() => {
    closeProblemForm()
    setProblemData(initialProblemData)
  }, [closeProblemForm])

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tForecast('form.problems.title')}</h3>

        <Button className="ml-auto" disabled={isProblemFormOpen} onClick={openProblemForm}>
          <PlusIcon className="size-5" />
          {tForecast('form.problems.labels.addProblem')}
        </Button>
      </div>

      <ul className="space-y-4">
        {problems.map((problem) => (
          <li key={problem.type}>
            <ProblemItem problem={problem} />
          </li>
        ))}
      </ul>

      {isProblemFormOpen && (
        <ProblemForm
          onProblemAdd={handleAddProblemClick}
          onProblemCancel={handleProblemCancel}
          problemData={problemData}
          setProblemData={setProblemData}
        />
      )}
    </section>
  )
}

export default ProblemsSection
