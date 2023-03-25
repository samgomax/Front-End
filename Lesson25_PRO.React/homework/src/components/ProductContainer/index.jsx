import React from 'react'
import { products } from '../../data/products'
import Product from '../Product'
import s from './index.module.css'

export default function ProductContainer() {
  return (
    <div>
      {
        products.map(el => <Product {...el} key={el.id} />)
      }
    </div>
  )
}
