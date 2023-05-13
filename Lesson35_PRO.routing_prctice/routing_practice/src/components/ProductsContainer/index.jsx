import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/categories_req';
import ProductItem from '../ProductItem';
import s from './index.module.css'
export default function ProductsContainer() {

    const [products, setProducts] = useState([]);

    const {category_id} = useParams();

    useEffect(() => {getProductsByCategory(category_id, setProducts)}, []);

    getProductsByCategory(category_id, setProducts);

  return (
    <div className= {s.products_container} >
        {
            products.map(el => <ProductItem key={el.id} {...el} />)
        }
    </div>
  )
}
