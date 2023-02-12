import { contactTypes } from '../types/index';

const { MESSAGES } = contactTypes;

export const addMessage = (datos) => ({
  type: MESSAGES,
  datos: datos,
});