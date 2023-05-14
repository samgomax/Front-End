import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function UserItem({id, name, role, avatar, email}) {

  const user_id = `user/${id}`;

  return (
    <Link to={user_id}>
      <div className={s.user_item} >
        <img src={avatar} alt={name} />
        <p>Name:{name} </p>
        <a href={`mailto:${email}`}>{email}</a>
        <p>Role:{role} </p>
      </div>
    </Link>
  )
}
