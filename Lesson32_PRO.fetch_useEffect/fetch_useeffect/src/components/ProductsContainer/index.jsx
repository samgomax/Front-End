import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../requests/products_req';
import Product from '../Product';

export default function ProductsContainer() {

  const [ products, setProducts ] = useState([]);

  const { category_id } = useParams();

  useEffect(() => {
    getProducts(category_id, setProducts)
  }, []);

  return (
    <div>
      {
        products.map(el => <Product key={el.id}{...el} />)
      }
    </div>
  )
}