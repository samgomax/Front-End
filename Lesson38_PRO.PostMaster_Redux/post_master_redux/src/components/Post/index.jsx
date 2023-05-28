import React from 'react'
import s from './index.module.css'
import { changeLikeAction, deletePostAction } from '../../store/reducers/postReducer';
import { useDispatch } from 'react-redux';
import CommentsContainer from '../CommentsContainer';

export default function Post({ id, title, text, like, comments }) {

  const like_text = like ? 'Liked' : 'Like?';

  const btn_style = {
    backgroundColor: like ? '#003153' : 'white',
    color: like ? 'white' : '#003153',
    border: like ? '1px solid transparent' : '1px solid #003153' 
  }

  const dispatch = useDispatch();

  return (
    <div className={s.post_item}>
      <p onClick={() => dispatch(deletePostAction(id))} >X</p>
      <h3>{ title }</h3>
      <p>{ text }</p>
      <button 
        style={btn_style}
        onClick={() => dispatch(changeLikeAction(id))}
      >
        { like_text }
      </button>
    <CommentsContainer {...{comments, post_id: id}} />
     </div>
  )
}