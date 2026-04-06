import { createFileRoute } from '@tanstack/react-router'
import { Otp } from '@/src/auth/otp'

export const Route = createFileRoute('/(auth)/otp')({
  component: Otp,
})
