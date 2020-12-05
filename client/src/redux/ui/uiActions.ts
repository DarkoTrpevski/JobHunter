import { DispatchDarkModeActionType } from '../types/types';
import { SET_DARK_MODE } from './uiActionsTypes';

export const setDarkMode = (value: boolean) => (dispatch: DispatchDarkModeActionType): void => {
  console.log('Inside setDarkMode action value is:', value)
  try {
    dispatch({
      type: SET_DARK_MODE,
      payload: value
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};