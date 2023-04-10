import React from 'react'
import { users } from '../../data/users'
import User from '../User'
import s from './index.module.css'

export default function Userscontainer() {
  return (
    <div className={s.users_container}>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
}
