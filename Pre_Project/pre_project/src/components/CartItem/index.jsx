import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteCartItemAction, incrementCountAction } from '../../store/reducers/cartReducer';
import s from './index.module.css'

export default function CartItem({id,title,count,image,price}) {

    const dispatch = useDispatch();

    const delete_card = () => dispatch(deleteCartItemAction(id));
    const increment_count = () => dispatch(incrementCountAction(id));
    const decrement_count = () => dispatch(decrementCountAction(id));


  return (
    <div className={s.cart_item}>
        <img src={image} alt={title} />
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
