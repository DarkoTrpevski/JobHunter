import { UserAction, UserState } from '../types/types';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from './authActionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: true,
}

const authReducer = (state: UserState = initialState, action: UserAction) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.jwtToken)
      return {
        ...state,
        ...payload,
        token: payload.jwtToken,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: null,
        loading: false
      }
    default:
      return state;
  }
}

export default authReducer;