import { createFileRoute } from '@tanstack/react-router'
import { Settings } from '@/src/settings'

export const Route = createFileRoute('/_authenticated/settings')({
  staticData: { title: 'Settings' },
  component: Settings,
})
