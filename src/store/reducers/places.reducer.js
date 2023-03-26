/* eslint-disable no-case-declarations */

import Place from '../../models/places';
import { placesTypes } from '../types';

const { ADD_PLACE, VIEW_PLACE, VIEW_PLACE_BY_ID, SAVE_PLACE, DEL_PLACE } = placesTypes;

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.datos.id.toString(),
        action.datos.title,
        action.datos.image,
        action.datos.coords,
        action.datos.address
      );
      state.places.push(newPlace);
      return state;

    case VIEW_PLACE:
      state.places = action.item;
      return state;

    case VIEW_PLACE_BY_ID:
      state.places = action.item;
      return state;

    case SAVE_PLACE:
      const newSavePlace = new Place(
        action.datos.id.toString(),
        action.datos.title,
        action.datos.image,
        action.datos.coords,
        action.datos.address
      );
      state.places.push(newSavePlace);
      return state;

    case DEL_PLACE:
      const filterPlaces = state.places.filter((place) => place.id !== action.id);
      state.places = filterPlaces;
      return state;

    default:
      return state;
  }
};

export default placesReducer;
