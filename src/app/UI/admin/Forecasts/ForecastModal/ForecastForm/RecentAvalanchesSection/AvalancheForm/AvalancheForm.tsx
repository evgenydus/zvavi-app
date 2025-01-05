import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

import { InputBlock, Footer, AvalancheSize, Aspects, type SetAspectsData } from '../../common'
import { DatePicker, Textarea } from '@/UI/components/inputs'

import type { Avalanche, AvalancheSize as AvalancheSizeType } from '@/business/types'

type AvalancheFormProps = {
  avalancheData: Avalanche
  onAvalancheAdd: () => void
  onCancel: () => void
  setAvalancheData: (value: React.SetStateAction<Avalanche>) => void
}

const AvalancheForm = ({
  avalancheData,
  onAvalancheAdd,
  onCancel,
  setAvalancheData,
}: AvalancheFormProps) => {
  const tForm = useTranslations('admin.forecast.form')

  const handleDateChange = useCallback(
    (value: Date | null) => {
      setAvalancheData((prev) => ({
        ...prev,
        date: value,
      }))
    },
    [setAvalancheData],
  )

  const handleSizeChange = useCallback(
    (value: AvalancheSizeType) => {
      setAvalancheData((prev) => ({
        ...prev,
        size: value,
      }))
    },
    [setAvalancheData],
  )

  const handleDescriptionChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAvalancheData((prev) => ({
        ...prev,
        description: target.value,
      }))
    },
    [setAvalancheData],
  )

  return (
    <div className="flex flex-col gap-6 rounded border p-3">
      <section className="grid grid-cols-2 items-start gap-x-6">
        <div className="flex flex-col gap-3">
          <InputBlock label={tForm('recentAvalanches.labels.date')} labelClassName="w-32">
            <DatePicker
              className="h-8 rounded bg-black/5 px-2"
              dateFormat="dd.MM.yyyy HH:mm"
              onChange={handleDateChange}
              selected={avalancheData.date}
              showTimeSelect
            />
          </InputBlock>

          <AvalancheSize onChange={handleSizeChange} value={avalancheData.size} />
        </div>

        <Aspects data={avalancheData} setData={setAvalancheData as SetAspectsData} />
      </section>

      <div className="flex flex-col gap-4 pt-1.5">
        <h4 className="w-32 font-semibold">{tForm('common.labels.description')}</h4>
        <Textarea className="w-full" onChange={handleDescriptionChange} rows={4} />
      </div>

      <Footer onCancel={onCancel} onSave={onAvalancheAdd} />
    </div>
  )
}

export default AvalancheForm
