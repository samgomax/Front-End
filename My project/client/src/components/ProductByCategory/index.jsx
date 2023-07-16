import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import s from './index.module.css'
import {  getProductsByCategory } from '../../async_action/products_req'
import { Link } from 'react-router-dom';

export default function  ProductByCatogory({id, title, image,description }) {

const base_url = 'http://localhost:3333';

// const category_url = `/categories/${id}`

const dispatch = useDispatch();

useEffect(() => dispatch(getProductsByCategory), []);

  return (
    <Link>
        <div className={s.category_card}>
            <img src={`${base_url}${image}`} alt={'catalog'} />
            <p>{title} </p>
        </div>
    </Link>
  )
}