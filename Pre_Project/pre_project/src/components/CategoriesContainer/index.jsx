import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories} from '../../async_actions/categories_req'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoryContainer() {

    const dispatch = useDispatch();

    useEffect(() => dispatch(getCategories), []);

    const categories_state = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      {
        categories_state.map((el, i) => <CategoryCard key={i} category={el} />)
      }
    </div>
  )
}
