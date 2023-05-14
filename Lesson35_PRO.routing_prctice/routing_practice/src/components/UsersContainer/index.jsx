import React, { useEffect, useState } from 'react'
import { getUsres } from '../../requests/users_req';
import UserItem from '../UserItem';
import s from './index.module.css'

export default function UsersContainer({role}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {getUsres(setUsers)}, []);

    const roleUsers = users.filter(el => el.role === role)

  return (
    <div className={s.users_container} >
      {
        roleUsers.map(el => <UserItem key={el.id} {...el} />)
      }
    </div>
  )
}
