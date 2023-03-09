/* eslint-disable no-case-declarations */

import Place from '../../models/places';
import { placesTypes } from '../types';

const { ADD_PLACE, 
        VIEW_PLACE,
        SAVE_PLACE } = placesTypes;

const initialState = {
    places: []
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PLACE:
        console.log('action', action.datos.title)
        console.log(action.datos.coords)
        console.log(action.datos.image)
        console.log(action.datos.address)
        console.log(action.datos.id.toString())
        const newPlace = new Place(action.datos.id.toString(), action.datos.title, action.datos.image, action.datos.coords, action.datos.address);
        state.places.push(newPlace);
        console.log(state.places)
        return state;

    case VIEW_PLACE:
      console.log("---------------------------------------------------")
      console.log(action)
      //console.log(action.item._array)
      console.log(action.item)
      console.log("---------------------------------------------------")
      state.places = action.item;
      return state;
    
    case SAVE_PLACE:
      const newSavePlace = new Place(action.datos.id.toString(), action.datos.title, action.datos.image, action.datos.coords, action.datos.address);
      state.places.push(newSavePlace);
      console.log(state.places)
      return state;

    default:
      return state;
  }
};


export default placesReducer;
