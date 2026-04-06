import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { Apps } from '@/src/apps'

const appsSearchSchema = z.object({
  type: z
    .enum(['all', 'connected', 'notConnected'])
    .optional()
    .catch(undefined),
  filter: z.string().optional().catch(''),
  sort: z.enum(['asc', 'desc']).optional().catch(undefined),
})

export const Route = createFileRoute('/_authenticated/apps/')({
  staticData: { title: 'Apps' },
  validateSearch: appsSearchSchema,
  component: Apps,
})
