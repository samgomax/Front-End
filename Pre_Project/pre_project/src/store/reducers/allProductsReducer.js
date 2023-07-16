const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';
const GET_CHEAP_PRODUCTS = 'GET_CHEAP_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload });
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductsByPriceAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload });
export const getCheapProductsAction = payload => ({ type: GET_CHEAP_PRODUCTS, payload });
export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });

export const allProductsReducer = (state=[], action) => {
  if(action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map(el => ({
      ...el,
      visible_price: true,
      visible_cheap: false
    }))
  } else if (action.type === SORT_PRODUCTS) {
    if(action.payload === 'title'){
      state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
    } else if(action.payload === 'price_asc') {
      state.sort((a, b) => a.price - b.price)
    } else if (action.payload === 'price_desc'){
      state.sort((a, b) => b.price - a.price)
    } else if (action.payload === 'default'){
      state.sort((a, b) => a.id - b.id)
    }
    return [...state]
  } else if (action.type === FILTER_PRODUCTS_BY_PRICE){
    const { min_value, max_value } = action.payload;
    return state.map(el => {
      if(el.price >= min_value && el.price <= max_value){
        el.visible_price = true
      } else {
        el.visible_price = false
      }
      return el
    })
  } else if(action.type === GET_CHEAP_PRODUCTS) {
    if(action.payload) {
      return state.map(el => {
        if(el.price <= 100){
          el.visible_price = true
        } else{
          el.visible_price = false
        }
        return el
      })
    } else {
      return state.map(el => {
        el.visible_price = true
        return el
      })
    }
  } else if(action.type === ADD_PRODUCT) {
    return [...state, action.payload]
  } else {
    return state
  }
}