import { createFileRoute } from '@tanstack/react-router'
import { SettingsDisplay } from '@/src/settings/display'

export const Route = createFileRoute('/_authenticated/settings/display')({
  staticData: { title: 'Display' },
  component: SettingsDisplay,
})
