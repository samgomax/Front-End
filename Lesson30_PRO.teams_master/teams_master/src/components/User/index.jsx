import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Users({id, user, team}) {

const {deleteUser} = useContext(Context);

  return (
    <div 
    className={s.user_card} 
    onClick={() => deleteUser(id)}>
      <p>{ user }</p>
      <p>{ team }</p>
    </div>
  )
}
