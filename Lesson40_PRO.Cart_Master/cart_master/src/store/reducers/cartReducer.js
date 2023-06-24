const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';

export const addToCartAction = payload => ({
    type: ADD_TO_CART, payload});

const checkProductInCart = (state, payload) =>{
    const productInState = state.find(el => el.id ===payload.id);
    if(productInState){
        productInState.count++;
        return[...state]
    }else{
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = (state = [], action) =>{
    if(action.type === ADD_TO_CART){
        return checkProductInCart(state, action.payload)
    }else{
        return state
    }
}
