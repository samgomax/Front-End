import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../requests/users_req';
import s from './index.module.css'

export default function UserDescriptionPage() {

    const[user, setUser] = useState([]);

    const{name, email, password} = user;

    const {user_id} = useParams();

    useEffect(() => {getUser(user_id, setUser)}, [])

  return (
    <div className={s.user_description_style} >
        <p>Name: {name} </p>
        <p>Email: {email}</p>
        <p>Password: {password} </p>
    </div>
  )
}
