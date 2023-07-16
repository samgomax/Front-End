import React,{ useEffect }  from 'react'
import ContainerByCategoryProducts from '../../components/ContainerByCategoryProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../async_action/products_req';
import CategoryCard from '../../components/CategoryCard';

export default function ProductsByCategoryPage() {

    const dispatch = useDispatch();

    useEffect(()=> dispatch(getProductsByCategory), []);

    const category_product_state = useSelector(state => state.productsByCategory)

    console.log(category_product_state);


  return (
    <div>
        <ContainerByCategoryProducts category_product = {category_product_state} />
    </div>
  )
}
