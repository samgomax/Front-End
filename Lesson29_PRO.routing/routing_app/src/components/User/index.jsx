import React from 'react'
import s from './index.module.css'

export default function User({ firstname,lastname, age, country}) {
  return (
    <div className={s.user_card}>
      <p>Name:{firstname} {lastname} </p>
      <p>Age:{age} </p>
      <p>Country:{country} </p>
    </div>
  )
}
