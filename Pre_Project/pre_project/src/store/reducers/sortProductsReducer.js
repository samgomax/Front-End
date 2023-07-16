const SORT_PRODUCTS = 'SORT_PRODUCTS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';


export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });


export const sortProductsReducer = (state = [], action) => {
    if(action.type === LOAD_PRODUCTS){
      return action.payload
    } else if (action.type === SORT_PRODUCTS)  
      if(action.payload === 'title'){
        state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
      } else if(action.payload === 'price') {
        state.sort((a, b) => a[action.payload] - b[action.payload])
      }
      return [...state]
    }