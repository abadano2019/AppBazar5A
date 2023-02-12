import { cartReducer, categoryReducer, contactReducer, orderReducer, productReducer } from './reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,
  messages: contactReducer,
  
});

export default createStore(rootReducer);
