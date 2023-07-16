const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProductAction = payload => ({
    type: ADD_PRODUCT, payload
});
export const addProductReducer = (state=[], action) => {
    if(action.type === ADD_PRODUCT) {
      return action.payload
    } else {
      return state
    }
  }