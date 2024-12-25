// Micro App Component
import React from 'react'
import useStore from '../stores/useStore' // Dynamically import the shared store

function Counter() {
  const count = useStore((state) => state.count) // Subscribe to count
  const increment = useStore((state) => state.increment) // Get the action

  return (
    <div>
      <h1>Count Host: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
