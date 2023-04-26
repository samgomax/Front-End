import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../context';

export default function AddCardForm() {

  const {add_card} = useContext(Context);

    const add_card_submit = event => {
        event.preventDefault();
        const {rus, eng} = event.target;
        const card = {
            id: Date.now(),
            rus: rus.value,
            eng: eng.value,
            lang: 'eng'
        }
        add_card(card);
        rus.value = '';
        eng.value = '';
    }


  return (
    <form className={s.add_card_form} onSubmit={add_card_submit}>
        <input typeof='text' placeholder='Russian' name='rus' />
        <input typeof='text' placeholder='English' name='eng' />
        <button>Добавить</button>
    </form>
  )
}
