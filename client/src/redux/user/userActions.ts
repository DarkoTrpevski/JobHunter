import { SET_CURRENT_USER, REGISTER_SUCCESS, AUTH_ERROR } from './userActionTypes';
import { DispatchUsertype, UserType } from '../redux-typescript/ReduxTypes';


export const registerUser = (user: any) => async(dispatch: any) => {
  const URL = 'http://localhost:4000/auth/register';

  try {
    const res: Response = await fetch(URL, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-type": "application/json"
      }
    });
    const data: any = await res.json();
    console.log('Inside userActions registerUser, the token is: ', data)
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: AUTH_ERROR });
  }
};

export const setCurrentUser = (user: UserType) => (dispatch: DispatchUsertype) => {
  try {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};