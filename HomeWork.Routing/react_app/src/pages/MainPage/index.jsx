import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function MainPge() {

  return (
    <div className={s.main_div}>

      <p>
        Рад приветствовать Вас на нащем сайте! Если Вы сдесь впервые,
        предлагаем Вам ближе ознакомиться с нашей командой. Нажмите <Link to='/about'>сюда</Link>, чтобы перейти на сайт

      </p>
    </div>
  )
}
