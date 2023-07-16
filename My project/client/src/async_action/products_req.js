import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"

export const getProductsByCategory = id => {
    return dispatch => {
        fetch (`http://localhost:3333/categories/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}


export const getAllProducts = dispatch => {
    fetch (`http://localhost:3333/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
}

export const getSingleProduct = id => {
    return dispatch => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleProductAction(json)))
    }
  }