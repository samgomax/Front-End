import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddTeamForm({deleteUser}) {

  const { addTeam } = useContext(Context);

  const form_submit = event => {
    event.preventDefault();
    const { team } = event.target;
    addTeam(team.value);
    team.value = '';
  }

  return (
    <form onSubmit={form_submit} className={s.add_team_form}>
      <p>Add team</p>
      <input type='text' placeholder="Team's name" name='team' />
      <button>Add</button>
    </form>
  )
}