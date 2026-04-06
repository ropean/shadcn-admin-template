import { createFileRoute } from '@tanstack/react-router'
import { SettingsAppearance } from '@/src/settings/appearance'

export const Route = createFileRoute('/_authenticated/settings/appearance')({
  staticData: { title: 'Appearance' },
  component: SettingsAppearance,
})
