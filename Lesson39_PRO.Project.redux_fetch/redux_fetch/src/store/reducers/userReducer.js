const ADD_USER = 'ADD_USER';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addUserAction = payload => ({type: ADD_USER,
payload});

export const loadAllProductsAction = payload => ({ type: LOAD_PRODUCTS, payload});

export const deleteProductAction = payload => ({type: DELETE_PRODUCT, payload});

export const userReducer = (state =[], action) => {
    if(action.type === ADD_USER){
        return [...state, action.payload]
    }else if (action.type === LOAD_PRODUCTS) {
        return action.payload
    }else if (action.type === DELETE_PRODUCT) {
        return state.filter(el => el.id !== action.payload)
    }else {
        return state
    }
}