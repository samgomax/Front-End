import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_todo, toggle_todo } from '../../store/slice/todoSlice'
import s from './index.module.css'

export default function TodoItem({id, title, completed}) {

  const styles = {backgroundColor: completed ? 'lightgreen' : 'lightgrey'};

    const dispatch = useDispatch();

    const deletTodo = (e) => {
      dispatch(delete_todo(id));
      e.stopPropagation();              
    }

  return (
    <div 
    className={s.todo_item}
    style={styles}
    onClick={() => dispatch(toggle_todo(id))}
    >
      <p>{ title }</p> 
      <p onClick={deletTodo}>X</p>
    </div>
  )
}
