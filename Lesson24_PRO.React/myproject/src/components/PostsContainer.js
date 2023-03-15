import React from 'react'
import { posts } from '../data/posts'
import Post from './Post'

export default function PostsContainer() {
  return (
    <div>
        {
        posts.map(el => <Post {...el} key={el.id} />)
        }
    </div>
  )
}
