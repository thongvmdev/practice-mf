import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/product-listing'>ProductList</Link>
      </li>
      <li>
        <Link to='/checkout'>Checkout</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
