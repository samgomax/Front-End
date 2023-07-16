import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function ProductCard({id, image, title, price}) {

  const product_url = `/products/${id}`

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCartAction({ id, image, title,price }));
  

  return (
      <div className={s.product_card}>
      <Link to={product_url}>    
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </Link>    
        <div onClick={add_to_cart}>Add to cart</div>
      </div>   
  )
}
