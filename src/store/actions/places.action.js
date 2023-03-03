import { placesTypes } from '../types';

const { ADD_PLACE,
        VIEW_PLACE } = placesTypes;

export const addPlace = (datos) => ({
  type: ADD_PLACE,
  datos,
});

export const viewPlace = (item) => ({
  type: VIEW_PLACE,
  item,
});
