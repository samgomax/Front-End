import React from 'react'
import s from './index.module.css'

export default function Cardform() {
  return (
        <form className={s.add_card_form} >
            <input type="text" placeholder='Russian' name='rus' />
            <input type="text" placeholder='English' name="eng" />
            <button>Add card</button>
        </form>
  )
}

