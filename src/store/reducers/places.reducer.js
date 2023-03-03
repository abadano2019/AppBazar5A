/* eslint-disable no-case-declarations */

import Place from '../../models/places';
import { placesTypes } from '../types';

const { ADD_PLACE, 
        VIEW_PLACE } = placesTypes;

const initialState = {
    places: []
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PLACE:
        console.log('action', action.datos.title)
        console.log(action.datos.coords)
        console.log(action.datos.image)
        const newPlace = new Place(Date.now().toString(), action.datos.title, action.datos.image, action.datos.coords);
        state.places.push(newPlace);
        console.log(state.places)
        return state;

    case VIEW_PLACE:
      /*let newCart = [];
      
      if (state.items.find((item) => item.id === action.item.id)) {
        
        newCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else
       {
          const item = { ...action.item, quantity: 1 };
          newCart = [...state.items, item];
        }*/
      return state;
    
    default:
      return state;
  }
};


export default placesReducer;
