import React from 'react'
import s from './index.module.css'

export default function Products({title,category,thumbnail}) {
  return (
    <div className={s.product_card}>
        <p>{title}</p>
        <p>{category}</p>
        <img src={thumbnail} alt= {title} />
    </div>
  )
}
