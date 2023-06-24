import React from 'react';
import {Link} from 'react-router-dom';
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu} >
        <Link to='/'>Products</Link>
        <Link to='/cart'>Cart</Link>
    </div>
  )
}
