import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/src/dashboard'

export const Route = createFileRoute('/_authenticated/')({
  component: Dashboard,
})
