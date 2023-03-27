import React from 'react'
import s from './index.module.css'

export default function Card({rus, eng, lang}) {

  const word = lang === 'eng' ? eng : rus;

  const card_styles = {
    color: lang ==='eng' ? 'white' : 'rgb(41, 128, 185)',
    backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
  }
  

  return (

    <div className={s.card} style={card_styles}>
        {word}
    </div>
  )
}
