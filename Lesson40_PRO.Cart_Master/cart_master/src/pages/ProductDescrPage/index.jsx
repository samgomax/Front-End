import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../async_actions/products_req';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { useParams } from 'react-router-dom';
import s from './index.module.css'

export default function ProductDescrPage() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const product_state = useSelector(state => state.singleProduct);

    const {images, title, description, price, category} = product_state;


    const addToCart = () => {
        dispatch(addToCartAction({id: +id, images, title,
      price }))};


    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])

  return (
    <div className={s.product}>
        {images && <img src={images[0]} alt={title} />}
        <div>
            <p>Title:{title} </p>
            <p>Description:{description} </p>
            <p>Price:{price} </p>
            <p className={s.category}>{category} </p>
            <div className={s.addBtn} 
            onClick={addToCart}
            >
                Add to cart
            </div>
        </div>
     </div>
  )
}
