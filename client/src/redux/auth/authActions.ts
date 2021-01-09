import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from './authActionTypes';
import { setAlert } from '../alert/alertActions';
import { DispatchUserActionType } from '../types/types';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import setAuthToken from '../../utils/setAuthToken';


export const loadCurrentUser = () => async(dispatch: DispatchUserActionType) => {

  const URL = "http://localhost:4000/auth/me";

  console.log('Inside loadUser localStorage.token is: ', localStorage.token);
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res: AxiosResponse = await axios.get(URL);
    console.log('Inside loadUser response is : ', res);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })

  } catch (err) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const registerUser = (username: string, email: string, password: string) => async(dispatch: DispatchUserActionType) => {
  const URL = 'http://localhost:4000/auth/register';

  const newUser = {
    name: username,
    email: email,
    password: password
  }

  try {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }
    const body = JSON.stringify(newUser);
    const res: AxiosResponse = await axios.post(URL, body, config);
    console.log('Inside registerUser, response data is: ', res.data);  
 
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadCurrentUser());

  } catch (err) {

    console.log('Error message is: ', err);
    if(err.response !== undefined) {
      const errors = err.response.data.errors;
      if(errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger'))
        })
      }
    }
    dispatch({ type: REGISTER_FAIL });
    throw err;

  }
};

export const loginUser = (email: string, password: string) => async(dispatch: any) => {
  const URL = 'http://localhost:4000/auth/login';

  const user = {
    email: email,
    password: password
  }

  try {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }
    const body = JSON.stringify(user);
    const res: AxiosResponse = await axios.post(URL, body, config);
    console.log('Inside registerUser, response data is: ', res.data);  
 
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadCurrentUser());

  } catch (err) {

    console.log('Error message is: ', err);
    if(err.response !== undefined) {
      const errors = err.response.data.errors;
      if(errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger'))
        })
      }
    }
    dispatch({ type: LOGIN_FAIL });
    throw err;

  }
};

export const logout = () => async(dispatch: any) => {
  dispatch({ type: LOGOUT })
}