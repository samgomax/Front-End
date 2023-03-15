import React from 'react'

export default function Products({product, price, country}) {
  return (
    <div>
        <p>title: {product} </p>
        <p>price: {price} </p>
        <p>country: {country} </p>
    </div>
  )
}
