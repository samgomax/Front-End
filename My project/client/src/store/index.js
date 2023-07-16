import{createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { addProductReducer } from './reducers/addProductReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allproducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    addProducrt: addProductReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));