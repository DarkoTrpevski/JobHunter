import { SET_CURRENT_USER } from './userActionTypes';
import { DispatchUserype, UserType } from '../redux-typescript/ReduxTypes';

export const setCurrentUser = (user: UserType) => (dispatch: DispatchUserype) => {
  try {
    dispatch({
      type: <string>SET_CURRENT_USER,
      // type: SET_CURRENT_USER,
      payload: user
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};