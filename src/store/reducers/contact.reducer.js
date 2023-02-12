/* eslint-disable no-case-declarations */
import { contactTypes } from '../types';

const { MESSAGES } = contactTypes;

const initialState = {
  messages: [], 
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES:
     
      id = state.messages.length + 1
      state.messages.push({id: id, datos: action.datos})
      console.log("Mensajes en Redux:")
      console.log(state.messages)
      return state
      
    default:
      return state;
  }
};

export default contactReducer;