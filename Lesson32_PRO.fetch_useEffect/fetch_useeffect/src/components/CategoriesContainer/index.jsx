import React, {useState, useEffect} from 'react'
import { getCategories } from '../../requests/categories_req';
import Category from '../Category';
import s from './index.module.css'

export default function CategoriesContainer() {

  const [categoires, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, [])


  return (
    <div className={s.categories_container}>
      {
        categoires.map(el => <Category key={el.id} {...el} /> )
      }
    </div>
  )
}
