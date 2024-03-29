import { useState, useEffect } from "react";
import PostsContainer from "./components/PostsContainer";
import { posts_data } from "./data/posts";
import AddPostform from "./components/AddPostForm";
import './App.css';
import { Context } from "./context";

function App() {

  let [posts, setPosts] = useState(posts_data);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')))
  }, [] )

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);

  const change_like = id => {
    const target_card = posts.find(el => el.id === id);
    target_card.like = !target_card.like;
    setPosts([...posts])
  }

  const add_post = (title, text) =>
    setPosts([...posts,
      {
        id:Date.now(),
        title,
        text,
        like: false,
        comments: []
      }
    ]);
  

  const delete_post = post_id => {
    setPosts(posts.filter(el => el.id !== post_id));
  }


  const add_comment = (post_id, text) =>{

    const comment = {
      id: Date.now(),
      text
    }

    const target_post = posts.find(el => el.id === post_id)
    target_post.comments.push(comment);
    setPosts([...posts]);
  }

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    setPosts([...posts]);
  }


  return (
    <div >
      <Context.Provider value={{add_post, change_like, delete_post, add_comment, delete_comment, posts}} >
        <AddPostform />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
