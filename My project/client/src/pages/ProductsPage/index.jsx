import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../async_action/products_req';

export default function ProductsPage() {

    const dispatch = useDispatch();

    useEffect(()=> dispatch(getAllProducts), []);

    const product_state = useSelector(state => state.allproducts)

  return (
    <div>
        <ProductsContainer products={product_state} />
    </div>
  )
}
