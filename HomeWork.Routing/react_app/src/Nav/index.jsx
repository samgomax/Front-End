import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
      <Link to ='/'>
        <div>Main</div>
      </Link>
      <Link to='/about' >
       <div>AboutUs</div>
      </Link>
    </div>
  )
}
