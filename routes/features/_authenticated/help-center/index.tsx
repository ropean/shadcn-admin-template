import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '@/components/coming-soon'

export const Route = createFileRoute('/features/_authenticated/help-center/')({
  component: ComingSoon,
})
