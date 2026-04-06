import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@/src/auth/sign-up'

export const Route = createFileRoute('/(auth)/sign-up')({
  staticData: { title: 'Sign Up' },
  component: SignUp,
})
