import { createFileRoute } from '@tanstack/react-router'
import { Otp } from '@/src/auth/otp'

export const Route = createFileRoute('/(auth)/otp')({
  staticData: { title: 'OTP Verification' },
  component: Otp,
})
