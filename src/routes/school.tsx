import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/school')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/school"!</div>
}
