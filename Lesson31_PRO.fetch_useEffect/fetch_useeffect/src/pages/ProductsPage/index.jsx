import React from 'react'
import { Link } from 'react-router-dom'
import ProductsContainer from '../../components/PoductsContainer'

export default function ProductsPage() {

  return (
    <div>
      <Link to='/'>
        <button>Main page</button>
      </Link>
    <ProductsContainer />
    </div>
  )
}
