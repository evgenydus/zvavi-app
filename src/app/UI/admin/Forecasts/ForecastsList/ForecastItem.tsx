import { TrashIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { dateFormat } from '@/business/constants'
import { useForecastDelete } from '@/data/hooks/forecasts'
import { useBoolean, useToast } from '@/UI/hooks'

import { IconButton } from '@/UI/components'
import { ConfirmationDialog } from '@/UI/components/ConfirmationDialog'
import Column from './Column'

import type { Forecast } from '@/business/types'

const ForecastItem = ({ forecast }: { forecast: Forecast }) => {
  const t = useTranslations()
  const { mutateAsync: deleteForecast } = useForecastDelete()
  const [isDeletionDialogOpen, { setFalse: closeDeletionDialog, setTrue: openDeletionDialog }] =
    useBoolean(false)

  const formattedCreationDate = format(forecast.createdAt, dateFormat)
  const formattedValidUntilDate = format(forecast.validUntil, dateFormat)
  const deleteForecastModalDescription = `
    ${t('admin.forecasts.deleteForecastModal.description')}
    ${t('common.words.from').toLowerCase()} ${formattedCreationDate}
    ${t('common.words.to').toLowerCase()} ${formattedValidUntilDate}?
  `

  const { toastError } = useToast()

  const handleDelete = async () => {
    try {
      await deleteForecast(forecast.id)
    } catch (error) {
      toastError('ForecastItem | handleDelete', { error })
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 px-4 py-1">
        <Column>{forecast.forecaster}</Column>
        <Column>{formattedCreationDate}</Column>
        <Column>{formattedValidUntilDate}</Column>
        <Column>{forecast.status}</Column>
        <Column className="pr-4 text-right">
          <IconButton
            className={classnames('inline-flex size-7')}
            icon={<TrashIcon className="size-5 stroke-inherit" />}
            onClick={openDeletionDialog}
            type="button"
          />
        </Column>
      </div>

      <ConfirmationDialog
        description={deleteForecastModalDescription}
        isOpen={isDeletionDialogOpen}
        onClose={closeDeletionDialog}
        onConfirm={handleDelete}
        title={t('admin.forecasts.deleteForecastModal.title')}
        variant="delete"
      />
    </>
  )
}

export default ForecastItem
