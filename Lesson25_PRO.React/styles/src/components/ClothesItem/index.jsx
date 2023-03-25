import React from 'react'
import s from './index.module.css'

export default function ClothesItem({title, price, size, discount}) {
    const new_price = price - (price * discount);

    const titleup = title[0].toUpperCase() + title.slice(1);

    const clothes_style = {
      backgroundColor: new_price >= 100 ? 'lightpink' : 'lightgreen'
    }

  return (
    <div className={s.clothes_item} style={clothes_style}>
        <p>Title:{titleup} </p>
        <p>Size:{size} </p>
        <p>Old price:{price} </p>
        <p>New price:{new_price} </p>
    </div>
  )
}
