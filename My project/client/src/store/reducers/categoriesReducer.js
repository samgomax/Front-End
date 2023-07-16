const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';

export const loadCategoriesAction = payload => ({
  type: LOAD_CATEGORIES, payload
});

export const categoriesReducer = (state =[],action) =>{
  if(action.type === LOAD_CATEGORIES) {
      return action.payload
  }else {
      return state
  }
}

export const loadProductsByCategoryAction = payload => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload });

export const productsByCategoryReducer = (state=[], action) => {
  if(action.type === LOAD_PRODUCTS_BY_CATEGORY) {
    return action.payload
  } else {
    return state
  }
}
