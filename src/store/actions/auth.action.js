import { FB_URL_AUTH_SIGN_IN, FB_URL_AUTH_SIGN_UP } from '../../constants/firebase';

import { authTypes } from '../types';

const { SIGN_UP, SIGN_IN, LOG_OUT, SIGN_IN_ERROR, SIGN_UP_ERROR } = authTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FB_URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        dispatch({
          type: SIGN_UP_ERROR,
        });
        throw new Error('Something went wrong in SingUp!');
      }

      const data = await response.json();

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log('Error Action SingUp', error);
      
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FB_URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        console.log("Error en SingIn")
        dispatch({
          type: SIGN_IN_ERROR,
        });
        throw new Error('Error: Something went wrong in SingIn!');
      }
      const data = await response.json();

      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log('Error Action SingIn', error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOG_OUT,
        token: null,
        userId: null,
      });
    } catch (error) {
      console.log('Error Action Logout', error);
    }
  };
};
