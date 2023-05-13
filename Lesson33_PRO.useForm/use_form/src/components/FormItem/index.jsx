import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import{useForm} from 'react-hook-form'


export default function FormItem({title, info_text, button_text,type,additional_text}) {

  const {register, handleSubmit, formState:{errors}, reset} = useForm({
    mode:'onBlur'
  });

  const submit = (data) => {
    console.log(data);
    reset()
  }
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegister = register('email', {required:'*Email is a required field',
  pattern: {
    value: emailRegexp,
    message: '*Enter valid email'
  }
});
  
  const passwordReister = register('password', {required:'*Password is a required field',
    pattern: {
    value: passwordRegexp,
    message: '*Your password should contain minimum eight characters, at least one letter, one number and one special character'
  }
});



  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
      <p className={s.form_title}>{title}</p>

      {
        type === 'reset_password' ? <p className={s.info_text}>{additional_text}</p> : ''
      }


      <FormInput
      type='text'
      placeholder='Email'
      name='email'
      {...emailRegister}
      />

      {errors.email && <p className={s.error_msg}>{errors.email?.message}</p>}
     

      {
        type === 'reset_password' ? ''
      : <FormInput
          type='password'
          placeholder='Password'
          name='password'
          {...passwordReister}
          />
        
      }

      {errors.password && <p className={s.error_msg}>{errors.password?.message}</p>}

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