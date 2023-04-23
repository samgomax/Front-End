import React, {useState, useEffect} from 'react'
import { get_product } from '../../requests/products_req'
import Products from '../Products';

export default function ProductsContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {get_product(setProducts)}, []);

  return (
    <div>
        {
            products.map(el => <Products key={el.id} {...el} />)
        }
    </div>
  )
}
