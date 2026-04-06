import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/401')({
  staticData: { title: 'Unauthorized' },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(errors)/401"!</div>
}
