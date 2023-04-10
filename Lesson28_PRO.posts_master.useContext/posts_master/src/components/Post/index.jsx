import React, {useContext} from 'react'
import s from './index.module.css'
import CommentsContainer from '../CommentsContainer';
import { Context } from '../../context';

export default function Post({id, title, text, like, comments}) {

  const {change_like, delete_post} = useContext(Context);

  const like_text = like ? 'Liked' : 'Like?'

    const btn_style = {
        backgroundColor: like ? '#003153' : '#138808',
        color: like ? 'white' : 'white',
        border: like ? '1px solid  transparent' : '1px solid'
    }

  return (
    <div className={s.post_item}>
      <p onClick={() =>delete_post(id)}>X</p>
      <h3>{ title }</h3>
      <p>{ text } </p>
      <button style={btn_style}
      onClick={() => change_like(id)}
      > 
        {like_text} 
      </button>
      <CommentsContainer comments={comments}
      post_id={id} />
    </div>
  )
}
