import React from 'react'
import Counter from './components/Counter'

const RemoteMainLayout = React.lazy(() => import('ui_components/MainLayout'))
const RemoteProductRoutes = React.lazy(() =>
  import('ProductListApp/ProductRoutes'),
)

const App = () => {
  const handleDispatchEvent = () => {
    const event = new CustomEvent('customEvent', {
      detail: { message: `Hello from Shell! ${Date.now()}` },
    })
    window.dispatchEvent(event)
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteMainLayout>
        <h1>Host Application</h1>
        <RemoteProductRoutes />
        <Counter />
        <button onClick={handleDispatchEvent}>Dispatch Custom Event</button>
      </RemoteMainLayout>
    </React.Suspense>
  )
}

export default App
