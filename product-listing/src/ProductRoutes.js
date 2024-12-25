import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path='/product-listing' element={<ProductList />} />
      <Route path='/product-listing/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default ProductRoutes
