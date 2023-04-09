import React from 'react'
import Post from '../Post'

export default function PostsContainer({posts, change_like, delete_post, add_comment, delete_comment}) {
  return (
    <div>
      {
        posts.map(el => <Post key={el.id} {...el} change_like={change_like}
          delete_post={delete_post}
          add_comment={add_comment}
          delete_comment={delete_comment} />)
      }
      
    </div>
  )
}
