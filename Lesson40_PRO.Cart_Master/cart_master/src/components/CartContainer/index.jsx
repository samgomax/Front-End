import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem';

export default function CartContainer() {

  const cart_state = useSelector(state => state.cart);

  return (
    <div>
      {
        cart_state.map(el => <CartItem key={el.id} {...el} />)
      }
    </div>
  )
}
