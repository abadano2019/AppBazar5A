import { FB_REALTIME_DB_URL } from '../../constants/firebase';
import { cartTypes } from '../types';

const { ADD_QUANTITY, 
        SUBSTRACT_QUANTITY, 
        VIEW_CART, 
        ADD_TO_CART, 
        REMOVE_FROM_CART,
        CONFIRM_ORDER } = cartTypes;

export const viewCart = (id) => ({
  type: VIEW_CART,
  id: id,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  id,
});

export const substractQuantity = (id) => ({
  type: SUBSTRACT_QUANTITY,
  id,
});

export const remoreFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (items, total, user) => {
  
  return async (dispatch) => {
    try {
      const response = await fetch(`${FB_REALTIME_DB_URL}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user,
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();
      
      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } catch (error) {
      console.log('error',error)
      dispatch({
        type: CONFIRM_ORDER,
        error,
      });
    }
  };
};
