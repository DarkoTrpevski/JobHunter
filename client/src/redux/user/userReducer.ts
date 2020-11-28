import { UserAction, UserState } from '../redux-typescript/ReduxTypes';
import { SET_CURRENT_USER } from './userActionTypes';

const initialState = {
  currentUser: null
}

const authReducer = (state: UserState = initialState, action: UserAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state;
  }
}

export default authReducer;