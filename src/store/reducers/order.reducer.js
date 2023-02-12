/* eslint-disable no-case-declarations */
import { ORDERS } from '../../constants/data/index';
import { orderTypes } from '../types';

const { SELECT_ORDER } = orderTypes;

const initialState = {
  orders: ORDERS,
  selected: null,
  filteredItems: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ORDER:
      const indexOrder = state.orders.findIndex(
        (order) => order.id === action.id
      );

      if (indexOrder === -1) return state;

      return {
        ...state,
        selected: state.orders[indexOrder],
        filteredItems: state.orders[indexOrder].items
      };
    default:
      return state;
  }
};

export default orderReducer;