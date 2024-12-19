import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/layout-b')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/layout-b"!</div>
}