import { loadAllProductsAction } from "../store/reducers/userReducer"

export const getAllUsers = dispatch => {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json.users)))
 }


// export const getAllUsers = () => {
//     return async dispatch => {
//         const resp = await fetch('https://dummyjson.com/users');
//         const data = await resp.json();
//         dispatch(loadAllProductsAction(data.users))
//     }
//  }