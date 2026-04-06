import { createFileRoute } from '@tanstack/react-router'
import { MaintenanceError } from '@/features/errors/maintenance-error'

export const Route = createFileRoute('/(errors)/503')({
  staticData: { title: 'Service Unavailable' },
  component: MaintenanceError,
})
