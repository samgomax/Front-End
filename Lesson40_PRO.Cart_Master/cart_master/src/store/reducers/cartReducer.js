const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';
const DELETE_CART_ITEM = '[CART_ITEM] DELETE_CART_ITEM';
const INCREMENT_COUNT = '[CART_ITEM] INCREMENT_COUNT';
const DECREMENT_COUNT = '[CART_ITEM] DECREMENT_COUNT';
const CLEAR_CART = '[CART_CONTAINER] CLEAR_CART';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteCartItemAction = payload => ({ type: DELETE_CART_ITEM, payload });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT, payload });
export const clearCartAction = () => ({ type: CLEAR_CART });

const checkProductInCart = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id);
  if (productInState) {
    productInState.count++;
    return [...state]
  } else {
    return [...state, {...payload, count: 1}]
  }
}

export const cartReducer = (state = [], action) => {
  if(action.type === ADD_TO_CART) {
    return checkProductInCart(state, action.payload)
  } else if(action.type === DELETE_CART_ITEM) {
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if(action.type === DECREMENT_COUNT){
    const target_card = state.find(el => el.id === action.payload);
    if(target_card.count === 1){
      return state.filter(el => el.id !== action.payload)
    } else {
      target_card.count--
      return [...state]
    }
  } else if(action.type === CLEAR_CART) {
    return []
  } else {
    return state
  }
}