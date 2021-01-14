import axios, { AxiosRequestConfig } from 'axios';
import store from '../redux/store';
import { LOGOUT } from '../redux/auth/authActionTypes';
import moment from 'moment';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    // 'token': localStorage.token
  }
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
// INTERCEPTING REQUESTS & RESPONSES
api.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(`The whole config is: `, config);
  console.log(`${config.method?.toUpperCase()} request sent to ${config.url} at ${moment(new Date())}`);
  return config;
}, err => Promise.reject(err));

// api.interceptors.response.use(res => res, err => {
//     if (err.response.data.msg === 'Token is not valid') {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;