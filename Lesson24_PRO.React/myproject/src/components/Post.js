import React from 'react'
import Comment from './Comment'

export default function Post({ title, text, comments }) {
  return (
    <div>
        <p>Title: {title} </p>
        <p>Post: {text} </p>
        <div>
            Comments:
            {
                comments.length === 0 ? <p>No comments</p> : comments.map(el => <Comment key={el.id} {...el} />)
            }
        </div>
    </div>
  )
}
