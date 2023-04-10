import React from 'react'
import Comment from '../Comment'
import s from './index.module.css'
import AddCommentForm from '../AddCommentform'

export default function CommentsContainer({comments,post_id}) {
  return (
    <div className={s.comments_container}>
        <div>
            {
                comments.map(el => <Comment key={el.id} {...el} post_id={post_id} />)
            }
        </div>
        < AddCommentForm post_id={post_id} />
    </div>
  )
}
