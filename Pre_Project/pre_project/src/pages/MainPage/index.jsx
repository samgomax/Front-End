import React from 'react'
import CategoryContainer from '../../components/CategoriesContainer'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <h2>Categories</h2>
      <Link to='/categories'>All categories</Link>
      <CategoryContainer />
    </div>
  )
}
