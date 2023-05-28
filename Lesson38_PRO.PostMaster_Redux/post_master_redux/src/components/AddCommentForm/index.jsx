import React from 'react'
import { addCommentAction } from '../../store/reducers/postReducer';
import { useDispatch } from 'react-redux'

export default function AddCommentForm({ post_id }) {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { comment } = event.target;
    const comment_obj = {
      id: Date.now(),
      text: comment.value
    }
    dispatch(addCommentAction({
      post_id,
      comment_obj
    }));
    comment.value = '';
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Ваш комментарий' name='comment' />
      <button>Добавить</button>
    </form>
  )
}