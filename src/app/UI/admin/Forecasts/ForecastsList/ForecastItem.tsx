import { TrashIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { dateFormat } from '@/business/constants'
import { useForecastDelete } from '@/data/hooks/forecasts'
import { useBoolean } from '@/UI/hooks'

import { IconButton } from '@/UI/components'
import { ConfirmationDialog } from '@/UI/components/ConfirmationDialog'
import Column from './Column'

import type { Forecast } from '@/business/types'

const ForecastItem = ({ forecast }: { forecast: Forecast }) => {
  const tWords = useTranslations('common.words')
  const tForecasts = useTranslations('admin.forecasts')
  const { error, mutateAsync: deleteForecast } = useForecastDelete()
  const [isDeletionDialogOpen, { setFalse: closeDeletionDialog, setTrue: openDeletionDialog }] =
    useBoolean(false)

  const formattedCreationDate = format(forecast.createdAt, dateFormat)
  const formattedValidUntilDate = format(forecast.validUntil, dateFormat)
  const deleteForecastModalDescription = `
    ${tForecasts('deleteForecastModal.description')}
    ${tWords('from').toLowerCase()} ${formattedCreationDate}
    ${tWords('to').toLowerCase()} ${formattedValidUntilDate}?
  `

  const handleDelete = async () => {
    try {
      await deleteForecast(forecast.id)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.error(error)
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
        title={tForecasts('deleteForecastModal.title')}
        variant="delete"
      />
    </>
  )
}

export default ForecastItem
