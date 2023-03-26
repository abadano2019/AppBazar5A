/* eslint-disable no-case-declarations */
import { cartTypes } from '../types';
import { sumTotal } from '../../utils/functions';

const {
  VIEW_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  CONFIRM_ORDER,
  SUBSTRACT_QUANTITY,
} = cartTypes;

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CART:
      return state;

    case ADD_TO_CART:
      let newCart = [];

      if (state.items.find((item) => item.id === action.item.id)) {
        newCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        newCart = [...state.items, item];
      }
      return {
        ...state,
        items: newCart,
        total: sumTotal(newCart),
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      };

    case ADD_QUANTITY:
      newCart = state.items.map((item) => {
        if (item.id === action.id) item.quantity += 1;
        return item;
      });
      return {
        ...state,
        items: newCart,
        total: sumTotal(newCart),
      };

    case SUBSTRACT_QUANTITY:
      newCart = state.items.map((item) => {
        if (item.id === action.id && item.quantity > 1) item.quantity -= 1;
        return item;
      });
      return {
        ...state,
        items: newCart,
        total: sumTotal(newCart),
      };

    case CONFIRM_ORDER:
      return {
        ...state,
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
