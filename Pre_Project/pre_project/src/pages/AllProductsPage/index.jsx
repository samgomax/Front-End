import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../async_actions/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import { filterProductsByPriceAction, getCheapProductsAction, sortProductsAction } from '../../store/reducers/allProductsReducer';
import AddProductForm from '../../components/AddProductForm';

export default function AllProductsPage() {

  const [ checked, setChecked ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), []);

  const products_state = useSelector(state => state.allProducts);

  const sort = event => dispatch(sortProductsAction(event.target.value));

  const filter_price = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const max_value = max.value || Infinity;
    const min_value = min.value || 0;
    dispatch(filterProductsByPriceAction({ min_value, max_value }))
  }

  const handleChange = () => setChecked(!checked);

  const handleClick = e => dispatch(getCheapProductsAction(e.target.checked));

  return (
    <div>

      <AddProductForm />

      <form onSubmit={filter_price}>
        <input type="number" name='min' placeholder='min' />
        <input type="number" name='max' placeholder='max' />
        <button>Filter</button>
      </form>

      <label>
        <span>Sorted</span>
        <select onInput={sort}>
          <option value='default'>By default</option>
          <option value='title'>By title A-Z</option>
          <option value='price_asc'>By price ASC</option>
          <option value='price_desc'>By price DESC</option>
        </select>
      </label>

      <label>
        <p>Products cheaper than 100$:</p>
        <input type='checkbox' checked={checked} onChange={handleChange} onClick={handleClick} />
      </label>
      
      <ProductsContainer products={products_state} />
    </div>
  )
}