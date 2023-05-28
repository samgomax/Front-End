import React from 'react'
import s from './index.module.css'
import { deleteCommentAction } from '../../store/reducers/postReducer'
import { useDispatch } from 'react-redux'

export default function Comment({ id, text, post_id }) {

  const dispatch = useDispatch();

  return (
    <div 
      className={s.comment_item}
     onClick={() => dispatch(deleteCommentAction({
      post_id, comment_id: id}))}
    >
      {text}
    </div>
  )
}