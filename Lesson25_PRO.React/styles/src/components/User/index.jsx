import React from 'react'
import s from './index.module.css'

export default function User({firstname, lastname, age, active}) {
    const status = active ? 'online' : 'offline';

    const user_styles = {
      backgroundColor: active ? 'lightgreen' : 'lightgray'
    }

  return (
    <div className={s.user_card} style ={user_styles}>
        <p>Nmae:{`${firstname} ${lastname}`} </p>
        <p>Age: {age}</p>
        <p>Status: {status} </p>
    </div>
  )
}
