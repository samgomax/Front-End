import React from 'react'
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

export default function ProductItem({id, images, title,
  price}) {

    const dispatch = useDispatch();
    const addToCart = () => dispatch(addToCartAction({id, images, title,
      price }))

  return (
    <div className={s.product_item}>
      <img src={images[0]} alt={title} />
      <p>Title:{title} </p>
      <p>Price:{price}$ </p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}
