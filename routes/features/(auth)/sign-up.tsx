import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@/features/auth/sign-up'

export const Route = createFileRoute('/features/(auth)/sign-up')({
  component: SignUp,
})
