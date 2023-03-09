import { getPlaces, insertPlace } from "../../constants/db";

import { URL_GEOCODING } from '../../constants/maps';
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
      console.log("datos insertados")
      console.log(datos.title)
      console.log(datos.image)
      console.log(datos.coords)
      console.log(address)
      const result = await insertPlace(datos.title, datos.image, address, datos.coords);
      console.log(result)
      const newData ={
        id: result.insertId,
        title: datos.title,
        image: datos.image,
        coords: datos.coords,
        address: address,
      }

      dispatch(addPlace(newData));
    } catch (error) {
      console.log(error);
    }
  };
};


export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await getPlaces();
      console.log("getPlace")
      console.log(result.rows)
      //dispatch(viewPlace(result.rows));
      dispatch(viewPlace(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};