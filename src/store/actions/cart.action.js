import { cartTypes } from '../types/index';

const { VIEW_CART } = cartTypes;

export const viewCart = (id) => ({
  type: VIEW_CART,
  id: id,
});