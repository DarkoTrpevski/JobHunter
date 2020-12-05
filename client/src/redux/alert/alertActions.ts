import { v4 as uuidv4 } from 'uuid';
import { DispatchAlertActionType } from '../types/types';
import { SET_ALERT, REMOVE_ALERT } from './alertTypes';

export const setAlert = (msg: string, alertType: string, timeout: number = 5000) => (dispatch: DispatchAlertActionType) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};