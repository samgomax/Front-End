import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.header}>
        <div>
        <img src={require('./flower_logo.png')} alt="logo" />
        <div className={s.catalog_btn}>Catalog</div>
        </div>

        <div className={s.nav}>
            <Link to='/'>Main page</Link>
            <Link to='/products' >All products</Link>
            <Link to='/sales'>All sales</Link>

            <img src={require('./cart_icon.png')} alt="cart" />
        </div>

    </div>
  )
}
