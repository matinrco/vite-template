import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <h1>Hello from About!</h1>
      <h2>this is about page</h2>
      <Link to="/">to root page</Link>
    </div>
  )
}
