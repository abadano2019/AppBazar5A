import { orderTypes } from '../types/index';

const { SELECT_ORDER } = orderTypes;

export const selectOrder = (id) => ({
  type: SELECT_ORDER,
  id: id,
});