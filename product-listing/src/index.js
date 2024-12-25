// src/index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import ProductRoutes from './ProductRoutes'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ProductRoutes />)
