import React, {useContext} from 'react'
import { Context } from '../../context';
import s from './index.module.css'

export default function AddPostform() {

  const {add_post} = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const {title, text} = event.target;
        add_post(title.value, text.value);
        title.value = '';
        text.value = '';
    }


  return (
    <form className={s.form_style} onSubmit={submit}>
        <input type='text' placeholder=' Ваш заголовок' name='title' />
        <input type='text' placeholder=' Ваш текст' name='text' />
        <button>Добавить</button>

    </form>
  )
}
