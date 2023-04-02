import React from 'react'
import s from './index.module.css'

export default function Cardform({add_card}) {

  const card_submit = event => {
    event.preventDefault();
    const {rus, eng} = event.target;
    const card = {
      id: Date.now(),
      rus:rus.value,
      eng:eng.value,
      lang:'eng'
    }
    add_card(card);
    rus.value = '';
    eng.value = '';
  }

  return (
        <form className={s.add_card_form} onSubmit={card_submit} >
            <input type="text" placeholder='Russian' name='rus' />
            <input type="text" placeholder='English' name="eng" />
            <button>Add card</button>
        </form>
  )
}

