import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function UsersPage() {
  return (
    <div className={s.users}>
        UsersPage
        <Link to='/'>Main</Link>
    </div>
  )
}
