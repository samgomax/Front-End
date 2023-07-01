import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { singleProductReducer } from './reducers/singleProductReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    singleProduct:singleProductReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))