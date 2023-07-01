import React from 'react'
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductItem({id, images, title,
  price}) {

    const dispatch = useDispatch();
    const addToCart = () => dispatch(addToCartAction({id, images, title,
      price }));
     

  return (
    <div className={s.product_item}>
      <Link to={`product/${id}`}>
        <div>
          <img src={images[0]} alt={title} />
          <p>Title:{title} </p>
          <p>Price:{price}$ </p>
        </div>
      </Link>
      <button onClick={addToCart} className={s.add_btn}>Add to cart</button>
    </div>
  )
}
