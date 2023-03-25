import React from 'react'
import { users } from '../../data/users'
import User from '../User'
import s from './index.module.css'

export default function UsersContainer() {
  return (
    <div className={s.user_card}>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
} 