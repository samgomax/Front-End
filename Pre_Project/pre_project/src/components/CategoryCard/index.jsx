import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({category}) {

    const category_up = category[0].toUpperCase() + category.slice(1);

    const category_url = `/categories/${category}`;

  return (
    <Link to={category_url}>
        <div className={s.category_card}>
        {category_up}
        </div>
    </Link>
  )
}
