import React from 'react'
import s from './index.module.css'
import CommentsContainer from '../CommentsContainer';

export default function Post({id, title, text, like, comments,  change_like, delete_post, add_comment, delete_comment }) {

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
      <CommentsContainer comments={comments} add_comment={add_comment}
      post_id={id} delete_comment={delete_comment} />
    </div>
  )
}
