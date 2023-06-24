const LOAD_PRODUCTS = '[PRODUCTS_CONTAINER] LOAD_PRODUCTS';

export const loadProducts = payload => ({type:
    LOAD_PRODUCTS, payload});

export const productReducer = (state = [], action)=>
{
    if(action.type === LOAD_PRODUCTS){
        return action.payload
    }else {
        return state
    }
}