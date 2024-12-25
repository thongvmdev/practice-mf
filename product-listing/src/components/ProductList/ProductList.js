import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

import useStore from 'shell/useStore'

const RemoteCard = React.lazy(() => import('ui_components/Card'))

const ProductList = () => {
  const count = useStore((state) => state.count) // Subscribe to count
  const increment = useStore((state) => state.increment) // Get the action
  const [evt, setEvt] = useState(null)

  useEffect(() => {
    const handleCustomEvent = (event) => {
      console.log('Custom event received:', event.detail)
      setEvt(event.detail)
    }

    window.addEventListener('customEvent', handleCustomEvent)

    return () => {
      window.removeEventListener('customEvent', handleCustomEvent)
    }
  }, [])

  return (
    <div className='product-list'>
      <h2>Product List</h2>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Link to='/product-listing/1'>
          <RemoteCard
            title='Product 1'
            content='This is the description of product 1.'
          />
        </Link>
        <Link to='/product-listing/2'>
          <RemoteCard
            title='Product 2'
            content='This is the description of product 2.'
          />
        </Link>
      </React.Suspense>

      <h1>Test Store Normal Consume in PL</h1>
      <div>
        <h1>Count Context Remote: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>

      {evt && <h3>Event Received: {evt.message}</h3>}
    </div>
  )
}

export default ProductList
