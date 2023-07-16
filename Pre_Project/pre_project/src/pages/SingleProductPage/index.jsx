import React, { useEffect } from 'react'
import { getSingleProduct } from '../../async_actions/products_req';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => dispatch(getSingleProduct(id)), []);

  const product_state = useSelector(state => state.singleProduct);

  const {title, description, image, price, category} = product_state;

  const add_to_cart = () => dispatch(addToCartAction({ id: +id, image, title, price }));

  const category_route = `/categories/${category}`;

  return (
    <div className={s.product}>
      <img src={image} alt={title} />
      <div>
        <h3>{title} </h3>
        <p>{description} </p>
        <p>{price}$ </p>
        <div onClick={add_to_cart}>Add ro cart</div>
        <Link to={category_route}>
          <div> { category } </div>
          </Link> 
      </div>
    </div>
  )
}
