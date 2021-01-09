import axios, { AxiosRequestConfig } from 'axios';
import store from '../redux/store';
import { LOGOUT } from '../redux/auth/authActionTypes';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
document.location
// INTERCEPTING REQUESTS & RESPONSES
api.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(`${config.method?.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
  return config;
}, err => Promise.reject(err));

api.interceptors.response.use(res => res, err => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);
export default api;