import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = ({ children }) => (
  <div>
    <Header title='Welcome to My App' />
    <Navbar />
    <main>{children}</main>
    <Footer text='© 2023 My Company' />
  </div>
)

export default MainLayout
