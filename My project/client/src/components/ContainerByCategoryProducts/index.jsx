import React from 'react'
import CategoryCard from '../CategoryCard'

export default function ContainerByCategoryProducts({category_product}) {
  return (
    <div>
        {
        category_product.map(el => <CategoryCard key={el.id} {...el} />)
        }
    </div>
  )
}
