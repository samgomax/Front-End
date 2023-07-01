import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { deleteCartItemAction, incrementCountAction, decrementCountAction } from '../../store/reducers/cartReducer'

export default function CartItem({ id, title, images, price, count }) {

  const dispatch = useDispatch();

  const delete_card = () => dispatch(deleteCartItemAction(id));
  const increment_count = () => dispatch(incrementCountAction(id));
  const decrement_count = () => dispatch(decrementCountAction(id));

  return (
    <div className={s.cart_item}>
      <img src={images[0]} alt={title} />
      <p>{title}</p>
      <p>{price * count}$</p>
      <p>{count}</p>
      <div>
        <button onClick={decrement_count}>-</button>
        <button onClick={increment_count}>+</button>
      </div>
      <span onClick={delete_card}>X</span>
    </div>
  )
}