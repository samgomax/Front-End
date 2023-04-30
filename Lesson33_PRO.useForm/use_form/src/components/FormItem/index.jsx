import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'

export default function FormItem({title, info_text, button_text,type,additional_text}) {
  return (
    <form className={s.form_item}>
      <p className={s.form_title}>{title}</p>

      {
        type === 'reset_password' ? <p className={s.info_text}>{additional_text}</p> : ''
      }


      <FormInput
      type='text'
      placeholder='Email'
      name='email' />

      {
        type === 'reset_password' ? ''
      : <FormInput
          type='password'
          placeholder='Password'
          name='password' />
      }

      {
        type === 'login' ? <a href='#' className={s.info_text_a}>{info_text}</a> : <p className={s.info_text}>{info_text}</p>
      }

       

      <FormButton color='yellow'>{button_text.submit}</FormButton>

        {
          type === 'reset_password' ? '' : <FormButton color='white'>{button_text.redirect}</FormButton>
        }

      
    </form>
  )
}
