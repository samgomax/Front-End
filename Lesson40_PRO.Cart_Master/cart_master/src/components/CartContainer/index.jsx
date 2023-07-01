import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../store/reducers/cartReducer';
import s from './index.module.css'

export default function CartContainer() {

  const dispatch = useDispatch();

  const cart_state = useSelector(state => state.cart);


  const total = cart_state.reduce((acc, {price, count}) => acc + price * count, 0);

  return (
  <div>
    <div>
      {
        cart_state.map(el => <CartItem key={el.id} {...el} />)
      }
    </div>
    <button onClick={() => dispatch(clearCartAction())} className={s.clear_button}>Clear cart</button>
    <p className={s.total}>Total:{total}$ </p>
  </div>
  )
}
