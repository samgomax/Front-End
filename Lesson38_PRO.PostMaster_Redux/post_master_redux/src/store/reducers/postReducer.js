import { posts_data } from "../../data/posts"

const CHANGE_LIKE = '[POST] CHANGE_LIKE';
const ADD_COMMENT = '[ADD COMMENT FORM] ADD COMMENT';
const DELETE_COMMENT = '[COMMENT] DELETE COMMENT';
const DELETE_POST = '[POST] DELETE POST';


export const changeLikeAction = payload => ({ type: CHANGE_LIKE, payload });
export const addCommentAction = payload => ({ type: ADD_COMMENT, payload });
export const deleteCommentAction = payload => ({ type: DELETE_COMMENT, payload });
export const deletePostAction = payload => ({ type: DELETE_POST, payload });

export const postReducer = (state = posts_data, action) => {
  if(action.type === CHANGE_LIKE){
    const target_card = state.find(el => el.id === action.payload);
    target_card.like = !target_card.like;
    return [...state]
  } else if(action.type === ADD_COMMENT) {
    const target_post = state.find(el => el.id === action.payload.post_id);
    target_post.comments.push(action.payload.comment_obj);
    return [...state]
  } else if (action.type === DELETE_COMMENT) {
    const target_post = state.find(el => el.id === action.payload.post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== action.payload.comment_id);
    return [...state]
  }else if (action.type === DELETE_POST){
    return state.filter(el => el.id !== action.payload)
  }else{
    return state
  }
}