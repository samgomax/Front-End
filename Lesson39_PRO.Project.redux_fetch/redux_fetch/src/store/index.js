import { createStore, combineReducers, applyMiddleware} from 'redux'
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    users: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));