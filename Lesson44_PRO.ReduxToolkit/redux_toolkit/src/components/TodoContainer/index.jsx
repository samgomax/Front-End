import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem';


export default function TodoContainer() {

    const todos_state = useSelector(state => state.todos.todos);

  return (
    <div>
        {
            todos_state.map(el => <TodoItem key={el.id} {...el} />)
        }
    </div>
  )
}
