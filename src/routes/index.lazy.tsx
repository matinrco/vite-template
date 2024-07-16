import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <h2>this is root page</h2>
      <Link to="/about">to about page</Link>
    </div>
  )
}
