import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'

import { DatePicker, Textarea } from '@/UI/components/inputs'
import { Aspects, AvalancheSize, Footer, InputBlock, type SetAspectsData } from '../../common'

import type { Avalanche, AvalancheSize as AvalancheSizeType } from '@/business/types'

export type AvalancheFormProps = {
  avalancheData: Avalanche
  onClose: VoidFunction
  onSave: (data: Avalanche) => void
}

const AvalancheForm = ({ avalancheData, onClose, onSave }: AvalancheFormProps) => {
  const tForm = useTranslations('admin.forecast.form')

  const [data, setData] = useState(avalancheData)

  const handleDateChange = useCallback(
    (value: Date | null) => {
      setData((prev) => ({
        ...prev,
        date: value,
      }))
    },
    [setData],
  )

  const handleSizeChange = useCallback(
    (value: AvalancheSizeType) => {
      setData((prev) => ({
        ...prev,
        size: value,
      }))
    },
    [setData],
  )

  const handleDescriptionChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setData((prev) => ({
        ...prev,
        description: target.value,
      }))
    },
    [setData],
  )

  const handleSave = () => {
    onSave(data)
    onClose()
  }

  return (
    <div className="flex flex-col gap-6 rounded border p-3">
      <section className="grid grid-cols-2 items-start gap-x-6">
        <div className="flex flex-col gap-3">
          <InputBlock label={tForm('recentAvalanches.labels.date')} labelClassName="w-32">
            <DatePicker
              className="h-8 rounded bg-black/5 px-2"
              dateFormat="dd.MM.yyyy HH:mm"
              onChange={handleDateChange}
              selected={data.date}
              showTimeSelect
            />
          </InputBlock>

          <AvalancheSize onChange={handleSizeChange} value={data.size} />
        </div>

        <Aspects data={data} setData={setData as SetAspectsData} />
      </section>

      <div className="flex flex-col gap-4 pt-1.5">
        <h4 className="w-32 font-semibold">{tForm('common.labels.description')}</h4>
        <Textarea
          className="w-full"
          onChange={handleDescriptionChange}
          rows={4}
          value={data.description}
        />
      </div>

      <Footer onCancel={onClose} onSave={handleSave} />
    </div>
  )
}

export default AvalancheForm
