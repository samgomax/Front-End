import React from 'react'
import s from './index.module.css'

export default function Product({title, price, country, discount, in_stock}) {

    const new_price = price - (price * discount);

    const product_class = new_price >= 50 ? 'Prime' : 'Not prime';

    const product_style = {
        backgroundColor: in_stock ? 'lightgreen' : 'lightgray'

    }


  return (
    <div className={s.product_card} style={product_style}>
        <p>Title:{title} </p>
        <p>Country:{country} </p>
        <p>Old price:{price} </p>
        <p>New price:{new_price.toFixed(2)} </p>
        <p>Class:{product_class} </p>
    </div>
  )
}
