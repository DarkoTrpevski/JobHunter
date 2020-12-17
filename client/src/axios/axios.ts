// import axios from 'axios';
// import store from '../store';
// import { LOGOUT, CLEAR_PROFILE } from '../actions/types';

// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired
//  logout the user if the token has expired
// **/

// // api.interceptors.response.use( res => res, err => {
// //     if (err.response.data.msg === 'Token is not valid') {
// //       store.dispatch({ type: LOGOUT });
// //       store.dispatch({ type: CLEAR_PROFILE });
// //     }
// //     return Promise.reject(err);
// //   }
// // );
// export default api;

import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}