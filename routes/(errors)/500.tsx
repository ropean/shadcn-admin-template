import { createFileRoute } from '@tanstack/react-router'
import { GeneralError } from '@/features/errors/general-error'

export const Route = createFileRoute('/(errors)/500')({
  staticData: { title: 'Internal Server Error' },
  component: GeneralError,
})
