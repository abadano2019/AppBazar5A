import {Alert} from 'react-native';
import { authTypes } from '../types';

const { SIGN_UP, SIGN_IN, LOG_OUT, SIGN_IN_ERROR, SIGN_UP_ERROR  } = authTypes;

const initialState = {
  token: null,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      Alert.alert("Register successful", "", [
        { text: "", style: "success" },
      ]);  
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN:
      Alert.alert("Login successful", "", [
        { text: "", style: "success" },
      ]); 
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN_ERROR:
      Alert.alert("User / password incorrect", "", [
        { text: "", style: "success" },
      ]);  
      return {
          ...state,
      };
    case SIGN_UP_ERROR:
      Alert.alert("User / password invalid", "", [
        { text: "", style: "success" },
      ]);  
      return {
          ...state,
      };
    case LOG_OUT:
        return {
          ...state,
          token: action.token,
          userId: action.userId,
    };
    default:
      return state;
  }
};

export default authReducer;
