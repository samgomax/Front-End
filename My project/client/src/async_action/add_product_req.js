import { addProductAction } from "../store/reducers/addProductReducer";

export const addProduct = body => {
    return dispatch => {
      fetch(`http://localhost:3333//sale/send`, {
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