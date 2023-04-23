import React from 'react'
import s from './index.module.css'

export default function Users({firstName, lastName, image}) {
  return (
    <div className={s.user_card}>
        <img src={image} alt={`${firstName} ${lastName}`} />
        <p>{`${firstName} ${lastName}`}</p>
    </div>
  )
}
