import { createFileRoute } from '@tanstack/react-router'
import { Chats } from '@/src/chats'

export const Route = createFileRoute('/_authenticated/chats/')({
  component: Chats,
})
