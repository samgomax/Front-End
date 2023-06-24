import React from 'react'
import s from './index.module.css'

export default function CartItem({id, title, images, price, count}) {
  return (
    <div className={s.cart_item}>
      <img src={images[0]} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{count}</p>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  )
}
