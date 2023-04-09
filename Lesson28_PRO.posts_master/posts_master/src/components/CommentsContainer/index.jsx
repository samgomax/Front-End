import React from 'react'
import Comment from '../Comment'
import s from './index.module.css'
import AddCommentForm from '../AddCommentform'

export default function CommentsContainer({comments, add_comment, post_id, delete_comment}) {
  return (
    <div className={s.comments_container}>
        <div>
            {
                comments.map(el => <Comment key={el.id} {...el} delete_comment={delete_comment} post_id={post_id} />)
            }
        </div>
        < AddCommentForm add_comment={add_comment} post_id={post_id} />
    </div>
  )
}
