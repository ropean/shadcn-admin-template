import { createFileRoute } from '@tanstack/react-router'
import { Settings } from '@/features/settings'

export const Route = createFileRoute('/features/_authenticated/settings')({
  component: Settings,
})
