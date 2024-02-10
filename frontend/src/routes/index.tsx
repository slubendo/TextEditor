import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h3>Welcome home!</h3>
    </div>
  )
}