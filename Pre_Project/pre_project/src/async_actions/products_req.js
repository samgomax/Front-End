import{loadProductsByCategoryAction} from '../store/reducers/productsByCategoryReducer'
import{addProductAction, loadAllProductsAction} from '../store/reducers/allProductsReducer'
import { loadSingleProductAction } from '../store/reducers/singleProductReducer'

export const getProductsByCategory = category => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}

export const getAllProducts = dispatch => {
    fetch('https://fakestoreapi.com/products')
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

  export const addProduct = body => {
    return dispatch => {
      fetch(`https://fakestoreapi.com/products`, {
        method:"POST",
        body:JSON.stringify(body)
    })
        .then(res => res.json())
        .then(json => {
          dispatch(addProductAction(json));
          console.log('Success!!')
          console.log(json)
        })
    }
  }