import React, { useState, useEffect } from 'react'
import { getProduct } from '../../requests/product_req'
import { useParams } from 'react-router-dom'
import s from './index.module.css'

export default function ProductDeacriptionPage() {

  const [ product, setProduct ] = useState([]);

  const { images, title, description, price } = product;

  const {product_id} = useParams();

  useEffect(() => {
    getProduct(product_id, setProduct)
  }, []);

  return (
    <div className={s.product_description_style} >
      <img src={ images } alt={title} />
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }$</p>
    </div>
  )
} 