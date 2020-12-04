import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT } from './authActionTypes';
import { setAlert } from '../alert/alertActions';
import { DispatchUserActionType, UserType } from '../types/types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';


export const loadCurrentUser = () => async(dispatch: any) => {

  const URL = "http://localhost:4000/auth/me";

  console.log('Inside loadUser localStorage.token is: ', localStorage.token);
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get(URL);
    console.log('Inside loadUser response is : ', res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const registerUser = (username: string, email: string, password: string) => async(dispatch: any) => {
  const URL = 'http://localhost:4000/auth/register';

  const newUser = {
    name: username,
    email: email,
    password: password
  }

  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }
    const body = JSON.stringify(newUser);
    const res = await axios.post(URL, body, config);
    console.log('Inside registerUser, response data is: ', res.data);  
 
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    dispatch(loadCurrentUser());
  } catch (err) {
    console.log(err.message);
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach((error: any) => {
        dispatch(setAlert(error.msg, 'danger'))
      })
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loginUser = (email: string, password: string) => async(dispatch: any) => {
  const URL = 'http://localhost:4000/auth/login';

  const user = {
    email: email,
    password: password
  }

  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }
    const body = JSON.stringify(user);
    const res = await axios.post(URL, body, config);
    console.log('Inside registerUser, response data is: ', res.data);  
 
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadCurrentUser());

    //Redirect User after logging in
    // history.push(SOMETHING)

  } catch (err) {
    console.log('Error message is: ', err);
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach((error: any) => {
        dispatch(setAlert(error.msg, 'danger'))
      })
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async(dispatch: any) => {
  dispatch({ type: LOGOUT })
}