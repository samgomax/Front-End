import React from 'react'
import s from './index.module.css'

export default function Card({id, rus, eng, lang, change_lang, delete_card}) {

    const word = lang === 'eng' ? eng : rus;

    const card_style = {
        color: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)',
        backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
    };

  return (
    <div 
    className={s.card} 
    style={card_style}
    onClick={() => change_lang(id)}
    onDoubleClick={()=> delete_card(id)}
    >
        {word}
    </div>
  )
}
