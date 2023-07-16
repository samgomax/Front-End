import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { loadAllProductsAction } from '../../store/reducers/allProductsReducer';

export default function ProductCard({id, image, title,price, discont_price}) {

  const base_url = 'http://localhost:3333';

  const dispatch = useDispatch();

  const product_cart = () => dispatch(loadAllProductsAction);

  const add_to_cart = () => dispatch(addToCartAction({ id, image, title, price }));



  return (
    <div className={s.product_card}>
    <Link>
        <img src={`${base_url}${image} `}alt={title} />
        <p> {title} </p> 
        <p>{price}$</p> 
        <p>{discont_price}</p>
    </Link>
      <div onClick={add_to_cart}>Add to cart</div>
    </div>
  )
}
