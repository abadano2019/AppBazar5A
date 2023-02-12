/* eslint-disable no-case-declarations */
import { CART } from '../../constants/data/index';
import { cartTypes } from '../types';

const { VIEW_CART } = cartTypes;

const initialState = {
  carts: CART,
  selected: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case VIEW_CART:
      
      return state

    default:
      return state;
  }
};

export default cartReducer;
