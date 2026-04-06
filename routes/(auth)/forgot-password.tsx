import { createFileRoute } from '@tanstack/react-router'
import { ForgotPassword } from '@/src/auth/forgot-password'

export const Route = createFileRoute('/(auth)/forgot-password')({
  staticData: { title: 'Forgot Password' },
  component: ForgotPassword,
})
