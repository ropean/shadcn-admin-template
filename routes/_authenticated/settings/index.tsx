import { createFileRoute } from '@tanstack/react-router'
import { SettingsProfile } from '@/src/settings/profile'

export const Route = createFileRoute('/_authenticated/settings/')({
  staticData: { title: 'Profile' },
  component: SettingsProfile,
})
