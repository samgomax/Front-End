import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'

export default function AddUserForm() {

  const { teams, addUser } = useContext(Context);

  const user_submit = event => {
    event.preventDefault();
    const { user,team } = event.target;
    addUser(user.value, team.value);
    user.value = '';
  }

  return (
    <form onSubmit={user_submit} className={s.add_user_form} >
      <p>Add user</p>
      <input type='text' placeholder="User's name" name='user' />
      <Select options={teams} name='team' />
      <button>Add user</button>
    </form>
  )
}