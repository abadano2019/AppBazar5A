import { deletePlace, getPlaceById, getPlaces, insertPlace } from "../../constants/db";

import { URL_GEOCODING } from '../../constants/maps';
import { placesTypes } from '../types';

const { ADD_PLACE,
        VIEW_PLACE,
        VIEW_PLACE_BY_ID,
        DEL_PLACE } = placesTypes;

export const addPlace = (datos) => ({
  type: ADD_PLACE,
  datos,
});

export const delPlace = (id) => ({
  type: DEL_PLACE,
  id,
})

export const viewPlace = (item) => ({
  type: VIEW_PLACE,
  item,
});

export const viewPlaceById = (item) => ({
  type: VIEW_PLACE_BY_ID,
  item,
});

export const savePlace = (datos) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(datos.coords?.lat, datos.coords?.lng));

      if (!response.ok) {
        throw new Error("No se ha podido conectar cone el servicio de geolocalización");
      }

      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección");

      const address = data.results[0].formatted_address;
      const result = await insertPlace(datos.user, datos.title, datos.image, address, datos.coords);
      
      const newData ={
        id: result.insertId,
        user: datos.user,
        title: datos.title,
        image: datos.image,
        coords: datos.coords,
        address: address,
      }

      dispatch(addPlace(newData));
    } catch (error) {
      console.log("Error Action Places Save_place",error);
    }
  };
};


export const loadPlaces = (user) => {
  return async (dispatch) => {
    try {
      const result = await getPlaces(user);
      
      dispatch(viewPlace(result?.rows?._array));
    } catch (error) {
      console.log("Error Action Places loadPlaces",error);
      throw error;
    }
  };
};

export const loadPlaceById = (id) => {
  return async (dispatch) => {
    try {
      const result = await getPlaceById(id);
      
      dispatch(viewPlaceById(result?.rows?._array));
      return(result?.rows?._array)
    } catch (error) {
      console.log("Error Action Places loadPlaceById",error);
      throw error;
    }
  };
};


export const delete_Place = (id) => {
  return async (dispatch) => {
    try {
      const result = await deletePlace(id);

      dispatch(delPlace(id));
    } catch (error) {
      console.log("Error Action Places delete_Place",error);
    }
  };
};
