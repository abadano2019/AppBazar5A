import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
        authReducer,
        cartReducer,
        categoryReducer,
        contactReducer,
        ordersReducer,
        placesReducer,
        productReducer,
} from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  messages: contactReducer,
  auth: authReducer,
  places: placesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
