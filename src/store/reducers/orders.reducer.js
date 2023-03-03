/* eslint-disable no-case-declarations */
import { orderTypes } from '../types';

const { GET_ORDERS, DELETE_ORDER, SELECT_ORDER } = orderTypes;

const initialState = {
  list: [],
  selected: {},
  filteredItems: []
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.orders,
      };
    case DELETE_ORDER:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    case SELECT_ORDER:
          // return
          //...state,
          //selected: state.list.filter((order) => order.id === action.id),

          console.log(action)
          const indexOrder = state.list.findIndex(
            (order) => order.id === action.id
          );

          if (indexOrder === -1) return state;
    
          console.log('items')
          console.log('items', state.list[indexOrder].items)

          return {
            ...state,
            selected: state.list[indexOrder],
            filteredItems: state.list[indexOrder].items
          };

    default:
      return state;
  }
};

export default ordersReducer;
